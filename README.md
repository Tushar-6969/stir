# AI Movie Insight Builder

A full-stack web application that allows users to fetch movie details from IMDb using the OMDb API, analyze audience reviews using AI (Groq API), and display insights with a clean, responsive UI.

---

## 🚀 Features

- **Movie Data Retrieval:** Input IMDb movie ID (e.g., `tt0133093`) to fetch detailed movie information.  
- **Rich Movie Display:** Movie title & poster, cast list, release year & IMDb rating, short plot summary.  
- **AI-Powered Sentiment Analysis:** Intelligent audience sentiment summaries using Groq API.  
- **Sentiment Classification:** Clear categorization as Positive / Mixed / Negative.  
- **Modern UI:** Responsive and intuitive design for all devices.  
- **Dark Mode:** Toggle between light and dark themes.  
- **Error Handling:** Graceful error messages and comprehensive loading states.  

---

## 🛠 Tech Stack

| Component       | Technology                     |
|-----------------|-------------------------------|
| Frontend        | Next.js (React)               |
| Backend         | Node.js (Next.js API routes)  |
| Movie Data      | [OMDb API](http://www.omdbapi.com/) |
| AI Analysis     | Groq API (Llama 3.3)          |
| Styling         | Tailwind CSS                  |

---

## 📁 Project Structure

ai-movie-insight/  
├── app/  
│   ├── api/  
│   │   ├── fetchMovie/route.ts  
│   │   └── sentiment/route.ts  
│   ├── movie/[id]/page.tsx  
│   ├── page.tsx  
│   └── layout.tsx  
├── components/  
│   ├── Loader.tsx  
│   ├── MovieCard.tsx  
│   ├── ReviewSection.tsx  
│   └── SentimentBadge.tsx  
├── lib/  
│   ├── omdb.ts  
│   └── ai.ts  
└── types/  
    └── movie.ts  

---

## ⚡ Setup Instructions

1. **Clone the repository:**  
   `git clone <your-repo-url>`  
   `cd ai-movie-insight`

2. **Install dependencies:**  
   `npm install`

3. **Create `.env.local`:**  
   `OMDB_API_KEY=your_key_here`  
   `GROQ_API_KEY=your_key_here`

4. **Run the development server:**  
   `npm run dev`

5. **Open in browser:** Visit [http://localhost:3000](http://localhost:3000)

---

## 🎨 Usage

1. Enter an IMDb ID (e.g., `tt0133093`).  
2. Click **Search**.  
3. View movie details with AI-generated sentiment analysis.  
4. Toggle **Dark Mode** in the header.  

---

## 📦 Dependencies

next, react, react-dom, axios, groq-sdk, tailwindcss  

---

## 💡 Future Improvements

- Pagination for large review lists  
- Advanced sentiment detection for sarcasm  
- Search history tracking  
- Smooth animations and transitions  
- Actual audience reviews display  
- Rating distribution visualization  
- Movie recommendations  
- User favorites with persistence  

---

## 🧑‍💻 Author

**Tushar Rathor**  
[LinkedIn](https://www.linkedin.com/in/tushar-rathor-277427259/) | [GitHub](https://github.com/Tushar-6969/stir) |  [Live](https://stir-mu.vercel.app/)
