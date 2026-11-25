# 🌳 Linktree – Your Personal Link Hub

A full-stack Linktree clone built using **Next.js, MongoDB, and Tailwind CSS** that allows users to create their personalized page and share all their important links through a single URL.

Users can choose a unique username (handle), add multiple social media or website links, and generate their own personalized Linktree page.

## 🚀 Features

- **Create Your Linktree:** Create a personalized Linktree page using a unique handle.
- **Custom Handle:** Choose a unique username to generate your personal URL.
- **Add Multiple Links:** Add multiple links with custom display names.
- **Handle Validation:** Check whether a handle already exists before creating a Linktree.
- **Existing Linktree Access:** Search for an existing handle and access its Linktree page.
- **Dynamic Routing:** Each user gets a unique URL based on their handle.
- **MongoDB Integration:** Store and retrieve user information and links from MongoDB.
- **Responsive UI:** Clean and user-friendly interface built with Tailwind CSS.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js | Full-stack React framework |
| React.js | Building user interfaces |
| Tailwind CSS | Styling and responsive design |
| MongoDB | Database for storing Linktree data |
| JavaScript | Application logic |
| Next.js API Routes | Backend operations and database communication |

## 📸 Project Preview

<!-- Add your project screenshots here -->

You can add screenshots of:
- Homepage
- Create Linktree page
- Handle selection page
- Generated Linktree page

## 📂 Project Structure

```text
linktree/
│
├── app/
│   ├── api/
│   │   ├── add/
│   │   │   └── route.js
│   │   └── checkhandle/
│   │       └── route.js
│   │
│   ├── [handle]/
│   │   └── page.js
│   │
│   ├── generate/
│   │   └── page.js
│   │
│   ├── layout.js
│   └── page.js
│
├── components/
│   └── Navbar.js
│
├── lib/
│   └── mongodb.js
│
├── public/
│
├── .env.local
├── package.json
└── README.md
```

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd linktree
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the root directory and add your MongoDB connection string.

```env
MONGO_URI=your_mongodb_connection_string
```

Replace the placeholder with your actual MongoDB connection string.

**Note:** Never expose your MongoDB connection string or commit your `.env.local` file to GitHub.

### 5. Run the development server

```bash
npm run dev
```

Open your browser and visit:

```text
http://localhost:3000
```

## 🗄️ Database Structure

The project uses MongoDB to store Linktree information.

**Database:** `Linktree`

**Collection:** `links`

Example document:

```json
{
  "handle": "rajat",
  "links": [
    {
      "linktext": "Instagram",
      "link": "https://instagram.com/username"
    },
    {
      "linktext": "GitHub",
      "link": "https://github.com/username"
    },
    {
      "linktext": "LinkedIn",
      "link": "https://linkedin.com/in/username"
    }
  ]
}
```

## 🔄 How It Works

1. The user visits the homepage.
2. The user enters a unique handle.
3. The application checks whether the handle is already registered.
4. If available, the user can add multiple links with custom names.
5. The Linktree information is stored in MongoDB through Next.js API routes.
6. After successful creation, the user is redirected to their personalized page.
7. The dynamic route `[handle]` retrieves the corresponding data from MongoDB and displays the user's Linktree.

### Example URLs

```text
yourdomain.com/rajat
yourdomain.com/aman
yourdomain.com/rahul
```

Each URL displays the Linktree associated with that particular handle.

## 🔮 Future Improvements

- User authentication and authorization.
- Ability to edit and delete existing links.
- Custom themes and background colors.
- Profile pictures and personal descriptions.
- Analytics to track link clicks.
- Drag-and-drop link reordering.
- QR code generation for personalized Linktree pages.

## 👨‍💻 Author

**Rajat Dobhal**

B.Tech Computer Science Engineering Student

- GitHub: [rjdobhal123-ops](https://github.com/rjdobhal123-ops)

---

⭐ If you like this project, consider giving it a star on GitHub!

**Built with ❤️ using Next.js, MongoDB, and Tailwind CSS.**