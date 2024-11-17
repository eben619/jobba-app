<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
</head>
<body>
  <h1>Jobba</h1>
  <p>
    <strong>Jobba</strong> is a decentralized job marketplace platform built using blockchain technology. It allows users to seamlessly connect job seekers and employers with integrated features such as payments, invoices, and dispute resolution. Built on Celo blockchain, the platform ensures security, transparency, and efficiency in the job application and hiring process.
  </p>

  <hr>

  <h2>Features</h2>
  <ul>
    <li><strong>Decentralized Job Listings</strong>
      <ul>
        <li>Browse job postings across multiple tech fields.</li>
        <li>Employers can post job opportunities with detailed descriptions.</li>
      </ul>
    </li>
    <li><strong>Secure Authentication</strong>
      <ul>
        <li>Integrated Web3Auth for user authentication with blockchain-enabled account abstraction.</li>
      </ul>
    </li>
    <li><strong>Payment Integration</strong>
      <ul>
        <li>Support for Celo's cUSD and CELO tokens for job-related payments.</li>
        <li>Generate invoices and manage disputes directly from the platform.</li>
      </ul>
    </li>
    <li><strong>Dashboard</strong>
      <ul>
        <li>View recent job applications, pending applications, and earnings at a glance.</li>
      </ul>
    </li>
    <li><strong>Modern UI</strong>
      <ul>
        <li>Responsive design using Material-UI for a clean and intuitive interface.</li>
      </ul>
    </li>
    <li><strong>Smart Contract Integration</strong>
      <ul>
        <li>Payments and other processes are handled securely via smart contracts.</li>
      </ul>
    </li>
  </ul>

  <hr>

  <h2>Technologies Used</h2>
  <ul>
    <li><strong>Frontend:</strong> React, Next.js</li>
    <li><strong>Styling:</strong> Material-UI</li>
    <li><strong>Blockchain:</strong> Celo Alfajores Testnet</li>
    <li><strong>Authentication:</strong> Web3Auth with account abstraction</li>
    <li><strong>Package Management:</strong> Yarn</li>
    <li><strong>Payment Gateway:</strong> Celo Composer's Minipay Template</li>
  </ul>

  <hr>

  <h2>Getting Started</h2>
  <h3>Prerequisites</h3>
  <p>Before you begin, ensure you have the following installed on your machine:</p>
  <ul>
    <li><strong>Node.js:</strong> v16.x or above</li>
    <li><strong>Yarn:</strong> Latest version</li>
    <li><strong>Git</strong></li>
  </ul>

  <h3>Installation</h3>
  <ol>
    <li>Clone the repository:
      <pre><code>git clone https://github.com/AkakpoErnest/jobba-app.git
cd jobba-app</code></pre>
    </li>
    <li>Install dependencies using Yarn:
      <pre><code>yarn install</code></pre>
    </li>
    <li>Set up environment variables:
      <ul>
        <li>Create a <code>.env</code> file in the root directory.</li>
        <li>Add the following variables:
          <pre><code>WC_PROJECT_ID=YOUR_PROJECT_ID
CELO_RPC=https://alfajores-forno.celo-testnet.org
WEB3AUTH_CLIENT_ID=YOUR_WEB3AUTH_CLIENT_ID</code></pre>
        </li>
      </ul>
    </li>
    <li>Run the development server:
      <pre><code>yarn dev</code></pre>
    </li>
    <li>Open your browser and navigate to:
      <pre><code>http://localhost:3000</code></pre>
    </li>
  </ol>

  <hr>

  <h2>Folder Structure</h2>
  <pre><code>jobba-app/
├── src/
│   ├── app/              # Main application
│   ├── components/       # Shared components (Header, Footer, etc.)
│   ├── pages/            # Route-based pages (Find a Job, Post a Job, etc.)
│   ├── providers/        # Context and global providers
│   ├── web3auth/         # Blockchain and authentication logic
├── public/               # Public assets
├── .env                  # Environment variables
├── package.json          # Dependencies and scripts</code></pre>

  <hr>

  <h2>Scripts</h2>
  <ul>
    <li><strong>Start Development Server:</strong> <code>yarn dev</code></li>
    <li><strong>Build for Production:</strong> <code>yarn build</code></li>
    <li><strong>Run Production Server:</strong> <code>yarn start</code></li>
    <li><strong>Lint Code:</strong> <code>yarn lint</code></li>
  </ul>

  <hr>

  <h2>Contributions</h2>
  <p>Contributions are welcome! To contribute:</p>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a feature branch: <code>git checkout -b feature-name</code>.</li>
    <li>Commit your changes: <code>git commit -m "Add feature"</code>.</li>
    <li>Push to the branch: <code>git push origin feature-name</code>.</li>
    <li>Open a pull request.</li>
  </ol>

  <hr>

  <h2>License</h2>
  <p>This project is licensed under the MIT License. See the <a href="./LICENSE">LICENSE</a> file for details.</p>

  <hr>

  <h2>Acknowledgements</h2>
  <ul>
    <li><a href="https://celo.org/">Celo Blockchain</a></li>
    <li><a href="https://web3auth.io/">Web3Auth</a></li>
    <li><a href="https://mui.com/">Material-UI</a></li>
    <li><a href="https://reactjs.org/">React</a></li>
  </ul>

  <hr>

  <h2>Contact</h2>
  <p>For questions or suggestions, please reach out via <a href="https://github.com/AkakpoErnest/jobba-app/issues">GitHub Issues</a>.</p>
</body>
</html>
