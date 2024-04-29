# E-Learning MERN App

## Overview
This is a comprehensive e-learning platform built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a user-friendly interface for both instructors and students to create, manage, and enroll in courses, as well as track progress and performance. Additionally, the app integrates with AWS for cloud storage, Redis for caching, and Stripe for payment processing.

## Features
- User Authentication: Secure user authentication and authorization system.
- Course Management: Instructors can create, update, and delete courses, while students can enroll in and access courses.
- Dashboard: Interactive dashboards for both instructors and students to view course progress, grades, and other relevant information.
- Payment Processing: Integration with Stripe for seamless and secure payment processing.
- Cloud Storage: Utilizes AWS (Amazon Web Services) for scalable and reliable cloud storage solutions.
- Caching: Implements Redis for caching frequently accessed data, improving performance and scalability.
- Responsive Design: Fully responsive design to ensure optimal user experience across devices.

## Installation
1. Clone the repository: 

```
git clone https://github.com/deafSpy/E-Learning
```

2. Navigate to the project directory: 

```
cd E-Learning
```

3. Install dependencies: 

```
cd client; npm install
cd server; npm install
```

4. Configure environment variables: Update `.env` file in the root directory of client & server, and add necessary environment variables (e.g., MongoDB URI, AWS credentials, Stripe API keys).
5. Start the development server: 

```
cd client; npm start
cd server; npm run dev
```

6. Access the application in your browser: ```http://localhost:3000```

7. Test Local Server vs Lambda Server

## Technologies Used
- MongoDB: NoSQL database for storing course and user data.
- Express.js: Web application framework for Node.js used for server-side logic and routing.
- React.js: Frontend JavaScript library for building user interfaces.
- Node.js: JavaScript runtime environment for server-side development.
- AWS (lambda, s3, cloudfront): Scalable & Reliable Serverless Computing, Cloud Storage, and Content Delivery Network (CDN)
- Redis: In-memory data structure store used for caching.
- Stripe: Payment processing platform for secure and seamless transactions.
- HTML/CSS: Frontend markup and styling languages for creating user interfaces.


## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For any inquiries or support, please contact [shreyas.palley@outlook.com](mailto:shreyas.palley@outlook.com).
