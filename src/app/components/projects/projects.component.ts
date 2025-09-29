import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// Define the Project interface to type-check project objects
// This interface describes the structure of a project object
// It includes properties for title, description, tags, and image URL


export interface Project {
  type: 'single' | 'collage';
  title: string;
  description: string;
  tags: string[];
  liveLink: string;
  sourceLink: string;
  imageUrl?: string;         // single image
  screenshots?: string[];  
  documentation:string;  // collage (optional)
}



@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

   expandedProjects: { [key: number]: boolean } = {};
   showDocumentation: boolean[] = [];

toggleDocumentation(i: number) {
  this.showDocumentation[i] = !this.showDocumentation[i];
}

  projects = [
  {
    type: 'single',
    title: 'FoodOrder Website',
     description: 'A responsive food ordering website built with JavaScript, Bootstrap, HTML, and CSS. Users can browse the menu, add items to a shopping cart, and view an order summary before checkout.',
    imageUrl: '/foodorder.JPG',
    tags: ['JavaScript', 'BOOTSTRAP', 'HTML', 'CSS'],
    // liveLink: '#',
    sourceLink: 'https://github.com/kiranmayi1609/myJavascript_H2.git',
     
    documentation: `
    ### Overview
    The FoodOrder Website is a static front-end project that simulates an online restaurant ordering system.

    ### Features
    - Menu display with categories (e.g., starters, main course, desserts)
    - Add/remove items to a shopping cart
    - Dynamic price calculation using JavaScript
    - Responsive design with Bootstrap
    - Clean UI with reusable components in HTML and CSS

    ### Tech Stack
    - **HTML** → structure of the web pages
    - **CSS + Bootstrap** → styling and responsive layout
    - **JavaScript** → interactive cart and price updates

    ### Possible Enhancements
    - Connect with a backend (Node.js, PHP, or ASP.NET) for real order storage
    - Add user authentication (login/sign-up)
    - Integrate a payment gateway for real transactions
  `



    
  },
   {
    
  type: 'single',
  title: 'Crypto E-commerce (Frontend)',
  description: 'A responsive Angular web application that provides a user-friendly interface to track cryptocurrency prices, display charts, and manage portfolios with simulated trading operations.',
  imageUrl: '/crypto.JPG',  // screenshot of Angular UI
  tags: ['Angular', 'TypeScript', 'Bootstrap', 'HTML', 'CSS'],
  liveLink: '#',
  sourceLink: 'https://github.com/kiranmayi1609/WebAPI_Angular',
  documentation: `
### Overview
The frontend of the **Crypto E-commerce Application** is built with Angular and TypeScript.  
It provides a clean and responsive UI for managing a crypto portfolio.

### Features
- Real-time crypto price dashboard
- Interactive charts (line & candlestick)
- Responsive design with Bootstrap
- CRUD operations on the portfolio via backend APIs

### Tech Stack
- Angular + TypeScript
- Bootstrap for styling
- HTML5, CSS3
  `
    
        
     
    },
    {
     type: 'single',
  title: 'Crypto E-commerce (Backend)',
  description: 'A secure backend developed with ASP.NET Web API, Entity Framework, and MSSQL. Provides RESTful services to support portfolio management, trading simulation, and price fetching for the Angular frontend.',
 imageUrl: 'https://media.licdn.com/dms/image/v2/D4D12AQFphtT8NwBk1A/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1722784906999?e=2147483647&v=beta&t=tzEX7VXwb5tql2vvPK2lreJeACTw4vIXZp-nZzwxNh8',
  tags: ['ASP.NET Web API', 'C#', 'Entity Framework', 'MSSQL'],
  liveLink: '#',
 sourceLink: 'https://github.com/kiranmayi1609/CryptoCurrency',

        documentation: `
### Overview
The backend of the **Crypto E-commerce Application** provides APIs for handling all portfolio and trading operations.

### Features
- RESTful APIs for Create, Read, Update, Delete (CRUD)
- Swagger documentation for API testing
- MSSQL database schema for portfolio & transactions
- Entity Framework for ORM
- Secure and scalable backend services

### Tech Stack
- ASP.NET Core Web API (C#)
- Entity Framework
- Microsoft SQL Server
  `

    },



  {
     type: 'single',
      title: 'Figma UI design ',
      description: 'A modern travel app prototype designed in Figma, featuring clean layouts, responsive components, and user-friendly navigation for booking trips, managing itineraries, and exploring destinations.',
      imageUrl: '/figmaDesign .png',
     tags: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems'],
      liveLink: '#',
      sourceLink: 'https://www.figma.com/design/6r2D6S2BUlviW9ykAjG7Vy/%E2%9C%A8Group-4---ReDi-Travel-App?node-id=72-549&t=wvk6asW1GoIKBAmt-1',

       documentation: `
### Overview
The **Figma UI Design Project** is a prototype for the *ReDi Travel App*.  
It focuses on delivering an intuitive user interface that helps users explore destinations, book trips, and manage their travel plans seamlessly.

### Features
- **Clean Layouts**: Minimal and visually engaging design.
- **Interactive Prototypes**: Clickable flows for testing user journeys.
- **Responsive Components**: Optimized for mobile and tablet views.
- **Design System**: Consistent typography, color palette, and reusable components.
- **Booking Flow**: Step-by-step design for browsing, selecting, and booking travel packages.

### Tools & Tech
- **Figma** → Used for creating UI components, wireframes, and interactive prototypes.
- **Design Tokens** → Consistent use of typography, spacing, and color variables.
- **Collaboration** → Shared Figma project with comments and real-time feedback.

### Possible Enhancements
- Extend to a **high-fidelity prototype** with animations and micro-interactions.
- Export design system to code using tools like **Figma-to-React** or **Anima**.
- Add accessibility guidelines (contrast, ARIA flow) for inclusive design.
  `
      

      
    },
        {
       type: 'single',
      title: 'Real-Time Streaming with Hadoop, PySpark, Hive & Kafka (WSL-based)',
      description: 'A full-featured big data streaming pipeline setup using Apache Kafka for real-time data ingestion, PySpark for processing, Hive for storage and querying, and Hadoop HDFS for distributed storage — all running on Ubuntu through WSL (Windows Subsystem for Linux) without using Docker containers. This setup simulates a real-world production environment for streaming customer data, such as orders or logs.',
      imageUrl: 'https://www.whizlabs.com/blog/wp-content/uploads/2018/08/big-data-pipeline.png',
      tags: ['Hadoop', 'Pyspark', 'Apache Hive ', 'Apache Kafka', 'Ubuntu (WSL)'],
      // liveLink: '#',
      sourceLink: 'https://github.com/kiranmayi1609/Wsl-Kakfa--hadoop-spark--hive-Streaming-',
       documentation: `
### Overview
This project demonstrates how to build a **real-time streaming pipeline** using open-source Big Data technologies on a Windows machine via **Ubuntu WSL (Windows Subsystem for Linux)**.  
The system is designed to simulate a production environment without Docker by directly installing and configuring Hadoop, Kafka, Spark, and Hive on WSL.

### Architecture
1. **Apache Kafka** → Collects and streams real-time data (e.g., orders, transactions, IoT events).
2. **PySpark Streaming** → Consumes Kafka streams, applies transformations/aggregations, and prepares data for storage.
3. **Hadoop HDFS** → Stores both raw and processed datasets in a distributed, fault-tolerant way.
4. **Apache Hive** → Provides SQL-based querying and analytics on top of HDFS.

### Features
- Real-time data ingestion through **Kafka Producers/Consumers**.
- **Streaming processing** in PySpark with transformations and aggregations.
- Batch + streaming integration with **Hive tables** for querying.
- **HDFS storage** of structured and unstructured data.
- Runs entirely on **Ubuntu WSL** → no Docker/VM overhead.

### Tech Stack
- **Apache Kafka** → Pub/Sub system for real-time event streaming.
- **PySpark** → Python-based stream processing on top of Spark.
- **Apache Hadoop HDFS** → Scalable distributed storage.
- **Apache Hive** → SQL queries on top of Hadoop.
- **Ubuntu WSL** → Linux environment inside Windows.

### Example Use Cases
- Streaming **customer orders** from an e-commerce website.
- Real-time **log analysis** for system monitoring.
- **IoT sensor data** pipelines for analytics dashboards.
- **Financial transaction streaming** with fraud detection rules.

### Setup & Execution (WSL-based)
1. Install Hadoop, Spark, Kafka, Hive manually in Ubuntu WSL.
2. Start Zookeeper & Kafka brokers:
   \`\`\`bash
   bin/zookeeper-server-start.sh config/zookeeper.properties
   bin/kafka-server-start.sh config/server.properties
   \`\`\`
3. Run a Kafka producer to simulate events.
4. Start a PySpark streaming job to consume and process data.
5. Store processed data into HDFS.
6. Query results via Hive:
   \`\`\`sql
   SELECT customer_id, COUNT(order_id) FROM orders_stream GROUP BY customer_id;
   \`\`\`

### Possible Enhancements
- Add **Airflow or Oozie** for orchestration.
- Use **Kafka Connect** to integrate with external DBs.
- Add a **real-time dashboard** using Grafana or Superset.
- Containerize later with Docker/Kubernetes for deployment.

  `
    },
{
  type: 'collage',
  title: 'QuickBank Mobile Payment App',
  description: 'A cross-platform mobile payment application built with React Native. QuickBank enables users to check account balances, make QR-based payments, and manage bills such as electricity, shopping, and loan EMIs from a single app.',
  screenshots: [
    '/mobilepay-overview.png',
    '/mobilepay-qrbasis.png',
    '/money-app.png',
    '/mobilpay2.png'
  ],
  tags: ['React Native', 'Gradle', 'Kotlin', 'Cross-Platform'],
  liveLink: '#',
    sourceLink: 'https://github.com/kiranmayi1609/MyMoneyApp.git',
  documentation: `
### Overview
QuickBank is a modern cross-platform mobile application built with **React Native** and powered by a **Kotlin + Gradle backend**.  
It provides users with a secure and intuitive way to manage digital payments and banking services in one place.

### Features
- **Account Management**: Check bank balances and transaction history.
- **QR-Based Payments**: Scan & pay at shops, restaurants, and service providers.
- **Bill Payments**: Settle electricity, water, shopping, and telecom bills directly.
- **Loan EMI Tracking**: View and manage your loan repayment schedule.
- **Cross-Platform**: Works seamlessly on both Android and iOS.
- **Secure Transactions**: Encrypted communication and secure authentication flow.

### Tech Stack
- **Frontend**: React Native (for iOS and Android apps).
- **Backend**: Kotlin with Gradle build system for scalable backend APIs.
- **State Management**: Redux / Context API (React Native).
- **Payments Integration**: QR Code scanners and third-party payment gateways.

### Gradle & Kotlin Integration
- **Gradle** is used as the build automation tool for managing dependencies and packaging the app.
- **Kotlin** powers backend services, providing type-safety and performance for banking operations.
- Integration ensures smooth communication between the **mobile client** (React Native) and **server APIs**.

### Possible Enhancements
- Add NFC-based payments for tap-to-pay support.
- Multi-language support for wider accessibility.
- AI-driven spending insights and bill reminders.
  `
}





];

selectedImage: string | null = null;

openImage(img: string) {
  this.selectedImage = img;
}

closeImage() {
  this.selectedImage = null;
}
   
  
  
  toggleReadMore(index: number) {
    this.expandedProjects[index] = !this.expandedProjects[index];
  }

}
