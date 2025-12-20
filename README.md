# Laravel + PrimeVue Starter Kit Rest api based

## 🚀 1. System Requirements

- **PHP >= 8.2**
- **Composer >= 2.0**
- **Node.js >= 22 & npm**
- **MySQL / PostgreSQL / SQLite**
- **Git**
- *(Optional)* WAMP / XAMPP for local hosting

---

## 📦 2. Installation

### 2.1 Clone the repository

```bash
git clone https://github.com/vorenus85/laravel-vue-starter-rest-api
cd laravel-vue-starter
```

### 2.2 Install PHP dependencies
```bash
composer install
```

### 2.3 Create the **.env** file

```bash
cp .env.example .env
```

Then update the .env file with the correct database and application settings.

### 2.4 Generate application key

```bash
php artisan key:generate
```

### 2.5 Run migrations and seed the database

```bash
php artisan migrate --seed
```

## 🎨 3. Frontend Setup

```bash
npm install
```

The project use Vite

```bash
npm run dev     # development mode (HMR)
npm run build   # production build
```

## 🔧 4. Start Local Development

In your composer.json includes a dev script:

```bash
composer dev
```

This command runs the following in parallel:

- php artisan serve
- php artisan queue:listen
- npm run dev

Alternatively, you can run them manually:

```bash
php artisan serve
php artisan queue:listen
npm run dev
```

## 🌐 5. Local Domain Configuration (optional)

To access the project via a custom local domain (e.g. laravel-vue-starter-api.local):

### Edit your hosts file

```lua
127.0.0.1    laravel-vue-starter-api.local
```

### Create an Apache VirtualHost

```apache
<VirtualHost *:80>
    ServerName laravel-vue-starter-api.local
    DocumentRoot "C:/wamp64/www/git/laravel-vue-starter-rest-api/public"

    <Directory "C:/wamp64/www/git/laravel-vue-starter-rest-api/public">
        AllowOverride All
        Require all granted
        Options Indexes FollowSymLinks
    </Directory>
</VirtualHost>
```

### Update .env

```env
APP_URL=http://laravel-vue-starter-api.local
```

## 🧪 6. Run Tests

```bash
composer test
```

## 🧹 7. Useful Commands

| Command                            | Description                     |
| ---------------------------------- | ------------------------------- |
| `php artisan serve`                | Start Laravel dev server        |
| `php artisan migrate:fresh --seed` | Rebuild database with seed data |
| `php artisan cache:clear`          | Clear application cache         |
| `npm run dev`                      | Run frontend with HMR           |
| `npm run build`                    | Production frontend build       |
| `php artisan queue:listen`         | Start queue worker              |
