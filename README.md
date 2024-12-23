# Blog Project

## Introduction
This project is a full-stack blogging platform that allows users to create, edit, and manage blog posts. The backend is powered by Node.js, Express.js, MongoDB, and the Hugging Face API, while the frontend uses React for a dynamic and responsive user interface.

## Features
- Create, read, update, and delete (CRUD) blog posts.
- Automatic summarization of blog content using Hugging Face API.
- Responsive and user-friendly UI built with React.

## Backend Setup

### Prerequisites
1. Node.js and npm installed.
2. MongoDB server running locally or a cloud instance.
3. A Hugging Face API key.

### Installation
1. Clone the repository and navigate to the `backend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the backend directory and add the following:
   ```env
   MONGO_URI=your_mongo_db_connection_string
   HUGGING_FACE_API_KEY=your_hugging_face_api_key
   PORT=5000
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. The server will run on `http://localhost:5000`.

## Frontend Setup

### Prerequisites
1. Node.js and npm installed.

### Installation
1. Navigate to the `frontend` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. The app will run on `http://localhost:5173`.

## API Endpoints

### Base URL
`http://localhost:5000`

### Endpoints

#### Create a Post
- **URL:** `/create-post`
- **Method:** POST
- **Payload:**
  ```json
  {
    "title": "string",
    "content": "string"
  }
  ```
- **Response:**
  ```json
  {
    "_id": "string",
    "title": "string",
    "content": "string",
    "summary_text": "string"
  }
  ```

#### Get All Posts
- **URL:** `/posts`
- **Method:** GET
- **Response:**
  ```json
  [
    {
      "_id": "string",
      "title": "string",
      "content": "string",
      "summary_text": "string"
    }
  ]
  ```

#### Get a Single Post
- **URL:** `/posts/:id`
- **Method:** GET
- **Response:**
  ```json
  {
    "_id": "string",
    "title": "string",
    "content": "string",
    "summary_text": "string"
  }
  ```

#### Update a Post
- **URL:** `/posts/:id`
- **Method:** PUT
- **Payload:**
  ```json
  {
    "title": "string",
    "content": "string"
  }
  ```

#### Delete a Post
- **URL:** `/posts/:id`
- **Method:** DELETE

## Frontend Pages

### Home Page
- Displays all blog posts with their summaries.
- Users can navigate to create a post or view individual posts.

### Create Page
- Allows users to create a new blog post by providing a title and content.

### Edit Page
- Enables users to update an existing blog post.

### Post Page
- Shows the complete details of a single blog post.
- Users can edit or delete the post.

## Dependencies

### Backend
- `express`: Web framework for Node.js.
- `mongoose`: MongoDB object modeling tool.
- `cors`: Middleware for handling cross-origin requests.
- `dotenv`: Module to load environment variables.
- `@huggingface/inference`: Hugging Face API client.

### Frontend
- `react`: JavaScript library for building user interfaces.
- `react-router-dom`: Library for routing in React.
- `axios`: HTTP client for making API requests.

## Conclusion
This project demonstrates the integration of a modern web application stack to create a functional blogging platform. The Hugging Face API integration adds AI-powered summarization, enhancing the user experience.
