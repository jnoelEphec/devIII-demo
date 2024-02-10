<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- <a href="https://github.com/jnoelEphec/devIII-demo.git">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a> -->

  <h3 align="center">E-Organizer Project Management Platform</h3>

  <p align="center">
    Streamline and enhance your project management process with E-Organizer!
    <br />
    <a href="https://github.com/jnoelEphec/devIII-demo.git"><strong>Explore the docs »</strong></a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

The E-Organizer Project Management Platform is a comprehensive solution designed to simplify project management tasks. It empowers teams and individuals with tools for efficient project tracking, collaboration, and resource management. With a focus on streamlining workflows and enhancing productivity, E-Organizer provides an intuitive, user-friendly interface alongside powerful features like task management, real-time notifications, and customizable reports.

Key features include:

- Interactive project dashboard for comprehensive oversight
- Sophisticated task management with priority labels
- Real-time alerts and collaboration tools
- Customizable project progress reports and analytics

The goal of E-Organizer is to provide a seamless, efficient platform that addresses the complexities of project management while fostering collaboration and transparency within teams.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

The E-Organizer platform is built using a robust stack to ensure performance, scalability, and ease of maintenance:

- <img src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white" />
- <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
- <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" />
- <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" />
- <img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white">

Other notable technologies and libraries may be used in the project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the latest version of npm installed:

```sh
npm install npm@latest -g
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jnoelEphec/devIII-demo.git
   ```
2. Navigate to the 'web' project directory and install NPM packages
   ```sh
   cd web
   npm install
   ```
3. Navigate to the 'api' project directory and install NPM packages
   ```sh
   cd api
   npm install
   ```
4. Enter your web configurations in `web/src/environments/`
   ```js
    ...
      api: 'YOUR_API_URL',
    ...
   ```
5. Enter your api configurations in `api/.env.sample` and rename this file as `.env`
   ```js
    ...
      TBD
    ...
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

E-Organizer can be used to manage projects of all sizes. It's ideal for tracking project progress, facilitating team collaboration, and ensuring that deadlines are met. Use the platform to create and assign tasks, set priorities, and monitor the
