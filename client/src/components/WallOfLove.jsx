import React, { useState } from 'react';
import './WallOfLove.css';

const reviews = [
  {
    name: "Danny Tsy",
    rating: 5,
    time: "a month ago",
    text: "I'd like to extend my heartfelt thanks to Green View Landscaping for an outstanding job! From start to finish, we received professional, precise, and high-quality service.",
    photo: null
  },
  {
    name: "Idan Shmuel",
    rating: 5,
    time: "3 months ago",
    text: "We had the pleasure of working with Yosef to develop our backyard, and the results were absolutely amazing! From start to finish, Yosef was professional, detail-oriented, and clearly passionate about his work.",
    photo: null
  },
  {
    name: "Moshe Ifrah",
    rating: 5,
    time: "a month ago",
    text: "I'm really happy with the service from Green View Landscaping! My yard looks amazing, the team was professional, friendly, and arrived right on time. Highly recommend them!",
    photo: null
  },
  {
    name: "Ben Hasson",
    rating: 5,
    time: "a week ago",
    text: "We had an amazing experience with the landscaping team who worked on our backyard. Their dedication and attention to detail were evident throughout the entire process.",
    photo: null
  },
  {
    name: "Marie Acton",
    rating: 5,
    time: "a week ago",
    text: "We were extremely impressed with Green View Landscaping. Their team was hardworking, professional, and efficient from start to finish. The results exceeded our expectations.",
    photo: null
  },
  {
    name: "Taheera Murji",
    rating: 5,
    time: "a week ago",
    text: "I just had my landscaping done by Sophie, Josef and team! They did an incredible job! Answered all my questions and were very patient with me! Attention to detail, clean and organized.",
    photo: null
  },
  {
    name: "Arik Hasson",
    rating: 5,
    time: "2 months ago",
    text: "These guys have done work for me and my family and never disappoint, actually over exceed our expectations every time! Would highly recommend.",
    photo: null
  },
  {
    name: "Michael Seens",
    rating: 5,
    time: "2 months ago",
    text: "Finding landscapers that are prompt, accountable and professional is nearly impossible. These guys are a rare find. They return calls, show up when they say and work until its done.",
    photo: null
  },
  {
    name: "Patrick LeBlanc",
    rating: 5,
    time: "2 months ago",
    text: "Josef did a great job in the backyard. It was exactly what I wanted. Very professional and pleasant to work with.",
    photo: null
  },
  {
    name: "Joe Lui",
    rating: 5,
    time: "2 months ago",
    text: "Yosef is very professional and thanks for the amazing job on our landscaping. Great attention to details and the results speak for themselves. Highly recommended!",
    photo: null
  },
  {
    name: "Devesh Singh",
    rating: 5,
    time: "3 months ago",
    text: "Green View Landscaping is a dedicated and hardworking team. They completed the job efficiently, within a reasonable timeframe, and at a cost-effective rate.",
    photo: null
  },
  {
    name: "Ravindra Babu",
    rating: 5,
    time: "3 months ago",
    text: "I had a fantastic experience working with Yosuf and his team on our backyard landscaping project. They were incredibly professional, punctual, and genuinely kind throughout the entire process.",
    photo: null
  }
];

const WallOfLove = () => {
  const [isPaused, setIsPaused] = useState(false);

  const toggleAnimation = () => {
    setIsPaused(!isPaused);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <section className="wall-of-love">
      <div className="container">
        <h2 className="wall-title">What Our Customers Say</h2>
        <p className="wall-subtitle">Real reviews from satisfied customers</p>
        
        <div className="reviews-container">
          <div 
            className={`reviews-track ${isPaused ? 'paused' : ''}`}
            onClick={toggleAnimation}
          >
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <h4 className="reviewer-name">{review.name}</h4>
                    <div className="review-meta">
                      <div className="stars">{renderStars(review.rating)}</div>
                      <span className="review-time">{review.time}</span>
                    </div>
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
                <div className="google-badge">
                  <svg viewBox="0 0 24 24" className="google-icon">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span>Google Review</span>
                </div>
              </div>
            ))}
            
            {/* Duplicate reviews for seamless loop */}
            {reviews.map((review, index) => (
              <div key={`duplicate-${index}`} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <h4 className="reviewer-name">{review.name}</h4>
                    <div className="review-meta">
                      <div className="stars">{renderStars(review.rating)}</div>
                      <span className="review-time">{review.time}</span>
                    </div>
                  </div>
                </div>
                <p className="review-text">{review.text}</p>
                <div className="google-badge">
                  <svg viewBox="0 0 24 24" className="google-icon">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span>Google Review</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a
            href="https://www.google.com/maps/place/Green+view+Calgary/@51.1033553,-114.0672166,15z/data=!4m8!3m7!1s0x49fd1d95e9aaacd7:0x1d7172f3c1d5cdf0!8m2!3d51.0276233!4d-114.087835!9m1!1b1!16s%2Fg%2F11w9ffzjyz?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="leave-review-btn"
          >
            Leave Us a Review
          </a>
        </div>
      </div>
    </section>
  );
};

export default WallOfLove; 