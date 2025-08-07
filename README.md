## Bloggies - Gaming News & Blog Platform

A personal React.js + Laravel portfolio project to read, add, and like posts.

Features:
- Browse posts by search, category and tags
- Register and log in to unlock full functionality
- View detailed post pages
- Get recommended posts based on tags
- Like post
- Explore curated News and Blog sections:
    - Recent: based on release date
    - Popular: based on like count
    - Highlights
- Edit user profile (username, email, bio)
- Add, edit, and delete posts
- View liked posts
- View your added posts

---

## Tech Stack
- **React.js** (with  hooks)
- **React Router** for routing
- **Axios** for HTTP Client
- **Tailwind CSS** for styling
- **Laravel** for backend
- **Laravel Sacntum** for authentication


---

## Screenshots

### Register Page
![Register](https://raw.githubusercontent.com/PeeOops/bloggies/main/storage/app/public/readme_images/register.png)

### Login Page
![Login](https://raw.githubusercontent.com/PeeOops/bloggies/main/storage/app/public/readme_images/login.png)

### Home Page
![Home](https://raw.githubusercontent.com/PeeOops/bloggies/main/storage/app/public/readme_images/home.png)

### News Page
![News](https://raw.githubusercontent.com/PeeOops/bloggies/main/storage/app/public/readme_images/news.png)

### Blogs Page
![Blogs](https://raw.githubusercontent.com/PeeOops/bloggies/main/storage/app/public/readme_images/blogs.png)

### Profile Page
![Profile](https://raw.githubusercontent.com/PeeOops/bloggies/main/storage/app/public/readme_images/profile.png)

### Add Post Page
![AddPost](https://raw.githubusercontent.com/PeeOops/bloggies/main/storage/app/public/readme_images/addpost.png)

### My Posts Page
![MyPosts](https://raw.githubusercontent.com/PeeOops/bloggies/main/storage/app/public/readme_images/mypost.png)

---

## Getting Started

### Prerequisites
1. **Node.js** (v18+ recommended)
2. **npm** or **yarn**
3. **PHP >= 8.1** 
4. **Composer**
5. **PostgreSQL**
6. **Git**

### Steps
1. Clone the repository
```bash
git clone https://github.com/PeeOops/bloggies.git
```
2. Install PHP dependencies
```bash
cd bloggies
composer install
```
3. Configure the .env file
```bash
cp .env.example .env
```
Update your .env file to match your **PostgreSQL** database credentials:
```bash
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=your_database_name
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password
```
4. Generate App Key and run migrations
```bash
php artisan key:generate
php artisan migrate
php artisan db:seed 
```
5. Link storage for images
```bash
php artisan storage:link
```
6. Serve backend
```bash
php artisan serve
```
By default, your API will run at http://127.0.0.1:8000
7. Install node dependencies
```bash
cd frontend
npm install
```
8. Start frontend server
```bash
npm run dev
```
Your React app should be running at http://localhost:5173

PeeDegrees




