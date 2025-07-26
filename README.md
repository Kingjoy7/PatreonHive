# 🎉 PatreonHive – A Patreon-Style Subscription Platform
> A modern web application where fans can fund and support content creators using Razorpay, just like Patreon.

---

## 🚀 Live URL

🌐 **[https://patreonhive.vercel.app](https://patreonhive.vercel.app)**

---

## 🛠️ Tech Stack

| Layer             | Technology                                                                |
|------------------ |---------------------------------------------------------------------------|
| **Frontend**      | React.js, Next.js (App Router), Tailwind CSS                              |
| **Authentication**| NextAuth.js (OAuth 2.0 with Google, GitHub, LinkedIn)                     |
| **Backend**       | Next.js API Routes                                                        |
| **Database**      | MongoDB Atlas + Mongoose                                                  |
| **Payments**      | Razorpay (Test Mode)                                                      |
| **Deployment**    | Vercel                                                                    |

---

## ✨ Features

- 🧾 **User Authentication** via Google, GitHub, LinkedIn & Email
- 🔒 Secure **OAuth 2.0 login** using NextAuth.js
- 💳 **Razorpay Integration** to simulate creator support
- 📄 **Creator Profiles** showcasing details
- 📈 Fully responsive **UI/UX** built with Tailwind CSS
- 🧠 Session handling and user persistence using MongoDB
- ✅ Protected API routes for authenticated operations

---

## 🧠 Project Structure

/pages
/api
/auth → NextAuth config (OAuth, callbacks)
/payment → Razorpay integration
/dashboard → User dashboard
/[creatorId] → Creator public profile

/models → Mongoose models (User, Payment)
/db/connectdb.js → MongoDB connection logic
/app → App Router (if migrated)
/components → UI Components (Navbar, Button, etc.)

makefile
Copy
Edit

---

## 🔐 Environment Variables

Create `.env.local` in root:

```env
# MongoDB
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority

# OAuth (NextAuth.js)
GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_secret

GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_secret

LINKEDIN_ID=your_linkedin_client_id
LINKEDIN_SECRET=your_linkedin_secret

# NextAuth
NEXTAUTH_URL=https://patreonhive.vercel.app
NEXTAUTH_SECRET=your_nextauth_secret

# Razorpay
RAZORPAY_KEY_ID=your_test_key_id
RAZORPAY_KEY_SECRET=your_test_key_secret
🧪 Setup Instructions
bash
Copy
Edit
# 1. Clone the repo
git clone https://github.com/Kingjoy7/PatreonHive
cd PatreonHive

# 2. Install dependencies
npm install

# 3. Create .env.local and add all env variables

# 4. Run locally
npm run dev
💸 Razorpay Test Details
Use any test card in Razorpay test mode:

txt
Copy
Edit
Card Number: 4111 1111 1111 1111
Expiry: Any future date
CVV: Any 3 digits
📚 Learnings & Highlights
Learned how to integrate real-world payment flows

Built secure multi-provider authentication

Designed clean MERN + Razorpay architecture

Deployed a fully functional SaaS-style project to Vercel

🙌 Acknowledgements
NextAuth.js Docs

Razorpay Docs

MongoDB Atlas

🪪 License
This project is licensed under the MIT License.

Built with ❤️ by Sujoy Sen
