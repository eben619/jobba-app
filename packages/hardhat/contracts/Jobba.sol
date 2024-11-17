// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Jobba {
    // Struct for job postings
    struct Job {
        uint256 id;
        address employer;
        string title;
        string description;
        uint256 salary; // Salary in wei
        uint256 experienceRequired; // Years of experience
        bool isFilled;
    }

    // Struct for applications
    struct Application {
        uint256 jobId;
        address applicant;
        string resume;
        bool isApproved;
        bool isPaid;
    }

    // Struct for disputes
    struct Dispute {
        uint256 jobId;
        address raisedBy;
        string reason;
        bool resolved;
    }

    uint256 private jobCounter;
    uint256 private applicationCounter;

    mapping(uint256 => Job) public jobs; // Job ID => Job
    mapping(uint256 => Application) public applications; // Application ID => Application
    mapping(uint256 => Dispute) public disputes; // Dispute ID => Dispute

    // Events
    event JobPosted(uint256 jobId, address indexed employer, string title);
    event JobApplied(uint256 applicationId, uint256 jobId, address indexed applicant);
    event PaymentProcessed(uint256 applicationId, address indexed employer, address indexed applicant, uint256 amount);
    event DisputeRaised(uint256 disputeId, uint256 jobId, address indexed raisedBy, string reason);
    event DisputeResolved(uint256 disputeId, uint256 jobId, address indexed resolvedBy);

    // Modifier to ensure only the employer can modify their jobs
    modifier onlyEmployer(uint256 jobId) {
        require(jobs[jobId].employer == msg.sender, "Only the employer can perform this action");
        _;
    }

    // Modifier to ensure the applicant owns the application
    modifier onlyApplicant(uint256 applicationId) {
        require(applications[applicationId].applicant == msg.sender, "Only the applicant can perform this action");
        _;
    }

    // Post a new job
    function postJob(
        string memory title,
        string memory description,
        uint256 salary,
        uint256 experienceRequired
    ) external {
        require(salary > 0, "Salary must be greater than 0");

        jobCounter++;
        jobs[jobCounter] = Job({
            id: jobCounter,
            employer: msg.sender,
            title: title,
            description: description,
            salary: salary,
            experienceRequired: experienceRequired,
            isFilled: false
        });

        emit JobPosted(jobCounter, msg.sender, title);
    }

    // Apply for a job
    function applyForJob(uint256 jobId, string memory resume) external {
        require(jobId > 0 && jobId <= jobCounter, "Invalid job ID");
        require(!jobs[jobId].isFilled, "Job is already filled");

        applicationCounter++;
        applications[applicationCounter] = Application({
            jobId: jobId,
            applicant: msg.sender,
            resume: resume,
            isApproved: false,
            isPaid: false
        });

        emit JobApplied(applicationCounter, jobId, msg.sender);
    }

    // Approve an application
    function approveApplication(uint256 applicationId) external onlyEmployer(applications[applicationId].jobId) {
        require(!applications[applicationId].isApproved, "Application already approved");

        applications[applicationId].isApproved = true;
    }

    // Process payment
    function processPayment(uint256 applicationId) external payable onlyEmployer(applications[applicationId].jobId) {
        require(applications[applicationId].isApproved, "Application must be approved");
        require(!applications[applicationId].isPaid, "Payment already processed");

        uint256 jobId = applications[applicationId].jobId;
        uint256 salary = jobs[jobId].salary;
        require(msg.value == salary, "Incorrect payment amount");

        payable(applications[applicationId].applicant).transfer(msg.value);
        applications[applicationId].isPaid = true;
        jobs[jobId].isFilled = true;

        emit PaymentProcessed(applicationId, msg.sender, applications[applicationId].applicant, salary);
    }

    // Raise a dispute
    function raiseDispute(uint256 jobId, string memory reason) external {
        require(jobId > 0 && jobId <= jobCounter, "Invalid job ID");
        require(jobs[jobId].isFilled, "Job must be filled to raise a dispute");

        uint256 disputeId = jobCounter; // Unique dispute ID
        disputes[disputeId] = Dispute({
            jobId: jobId,
            raisedBy: msg.sender,
            reason: reason,
            resolved: false
        });

        emit DisputeRaised(disputeId, jobId, msg.sender, reason);
    }

    // Resolve a dispute
    function resolveDispute(uint256 disputeId) external {
        require(disputes[disputeId].raisedBy == msg.sender || msg.sender == jobs[disputes[disputeId].jobId].employer, "Unauthorized");
        require(!disputes[disputeId].resolved, "Dispute already resolved");

        disputes[disputeId].resolved = true;

        emit DisputeResolved(disputeId, disputes[disputeId].jobId, msg.sender);
    }

    // Fetch job details
    function getJob(uint256 jobId) external view returns (Job memory) {
        require(jobId > 0 && jobId <= jobCounter, "Invalid job ID");
        return jobs[jobId];
    }

    // Fetch application details
    function getApplication(uint256 applicationId) external view returns (Application memory) {
        require(applicationId > 0 && applicationId <= applicationCounter, "Invalid application ID");
        return applications[applicationId];
    }

    // Fetch dispute details
    function getDispute(uint256 disputeId) external view returns (Dispute memory) {
        require(disputeId > 0 && disputeId <= jobCounter, "Invalid dispute ID");
        return disputes[disputeId];
    }
}
