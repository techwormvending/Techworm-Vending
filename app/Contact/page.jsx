<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Techworm Vending - Get Your Free AI Vending Machine</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #f0f0f0;
            background: #0a0e27;
        }

        header {
            background: linear-gradient(135deg, #0f1e3a 0%, #1a2f4a 100%);
            color: white;
            padding: 1rem 2rem;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 20px rgba(0, 217, 255, 0.15);
            border-bottom: 1px solid rgba(0, 217, 255, 0.2);
        }

        header nav {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 0.8rem;
        }

        .logo img {
            height: 45px;
            width: auto;
        }

        nav ul {
            list-style: none;
            display: flex;
            gap: 2rem;
        }

        nav a {
            color: white;
            text-decoration: none;
            transition: opacity 0.3s;
        }

        nav a:hover {
            color: #00d9ff;
            opacity: 1;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        section {
            padding: 4rem 2rem;
        }

        .hero {
            background: linear-gradient(135deg, #0a1628 0%, #1a3a4a 100%);
            padding: 3rem 2rem;
            text-align: center;
            border-bottom: 1px solid rgba(0, 217, 255, 0.2);
        }

        .hero h1 {
            font-size: 3.5rem;
            color: #00d9ff;
            text-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
            margin-bottom: 1rem;
        }

        .hero p {
            font-size: 1.1rem;
            color: #e0e0e0;
        }

        .contact-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            margin: 3rem 0;
        }

        .contact-info {
            background: linear-gradient(135deg, rgba(15, 30, 58, 0.8), rgba(26, 47, 74, 0.8));
            padding: 2.5rem;
            border-radius: 10px;
            border: 1px solid rgba(0, 217, 255, 0.2);
        }

        .contact-info h3 {
            color: #00d9ff;
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
        }

        .info-item {
            margin-bottom: 2rem;
        }

        .info-label {
            color: #00d9ff;
            font-weight: bold;
            margin-bottom: 0.5rem;
        }

        .info-value {
            color: #e0e0e0;
            font-size: 1.05rem;
        }

        .info-value a {
            color: #00d9ff;
            text-decoration: none;
            transition: color 0.3s;
        }

        .info-value a:hover {
            color: #00f0ff;
            text-decoration: underline;
        }

        .form-wrapper {
            background: linear-gradient(135deg, rgba(15, 30, 58, 0.8), rgba(26, 47, 74, 0.8));
            padding: 2.5rem;
            border-radius: 10px;
            border: 1px solid rgba(0, 217, 255, 0.2);
        }

        .form-wrapper h3 {
            color: #00d9ff;
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            color: #e0e0e0;
            font-weight: 500;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid rgba(0, 217, 255, 0.3);
            border-radius: 5px;
            font-family: inherit;
            font-size: 1rem;
            background: rgba(15, 30, 58, 0.8);
            color: #e0e0e0;
        }

        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #00d9ff;
            box-shadow: 0 0 15px rgba(0, 217, 255, 0.4);
            background: rgba(15, 30, 58, 0.95);
        }

        .submit-btn {
            background: linear-gradient(135deg, #00d9ff, #00a8cc);
            color: #0a0e27;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            width: 100%;
            transition: all 0.3s;
            box-shadow: 0 4px 15px rgba(0, 217, 255, 0.3);
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 25px rgba(0, 217, 255, 0.5);
        }

        .faq {
            background: rgba(0, 217, 255, 0.02);
            border-top: 1px solid rgba(0, 217, 255, 0.2);
            border-bottom: 1px solid rgba(0, 217, 255, 0.2);
        }

        .faq h2 {
            color: #00d9ff;
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            text-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
        }

        .faq-item {
            background: linear-gradient(135deg, rgba(15, 30, 58, 0.8), rgba(26, 47, 74, 0.8));
            padding: 2rem;
            border-radius: 8px;
            border: 1px solid rgba(0, 217, 255, 0.2);
            margin-bottom: 1.5rem;
        }

        .faq-item h4 {
            color: #00d9ff;
            margin-bottom: 1rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .faq-item h4:hover {
            color: #00f0ff;
        }

        .faq-toggle {
            font-size: 1.5rem;
        }

        .faq-answer {
            color: #e0e0e0;
            display: none;
        }

        .faq-answer.active {
            display: block;
        }

        footer {
            background: #05081a;
            color: #a0a0a0;
            text-align: center;
            padding: 2rem;
            font-size: 0.9rem;
            border-top: 1px solid rgba(0, 217, 255, 0.2);
        }

        .success-message {
            background: rgba(0, 217, 255, 0.2);
            border: 1px solid rgba(0, 217, 255, 0.5);
            color: #00d9ff;
            padding: 1rem;
            border-radius: 5px;
            margin-bottom: 1rem;
            display: none;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }

            nav ul {
                gap: 1rem;
                font-size: 0.9rem;
            }

            .contact-wrapper {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <nav>
            <div class="logo">
                <img src="tech_logo.jpg" alt="Techworm Vending">
                <span>TECHWORM</span>
            </div>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="machines.html">Machines</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="venues.html">For Venues</a></li>
                <li><a href="contact.html" style="color: #00d9ff;">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <h1>Get in Touch</h1>
        <p>Ready to start your 60-day free trial? Contact us today.</p>
    </section>

    <!-- Contact Section -->
    <section>
        <div class="container">
            <div class="contact-wrapper">
                <!-- Contact Info -->
                <div class="contact-info">
                    <h3>Contact Information</h3>
                    
                    <div class="info-item">
                        <div class="info-label">📧 Email</div>
                        <div class="info-value">
                            <a href="mailto:contact@techwormvending.com">contact@techwormvending.com</a>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="info-label">💬 WhatsApp</div>
                        <div class="info-value">
                            <a href="https://wa.me/1234567890" target="_blank">Contact us on WhatsApp</a>
                        </div>
                    </div>

                    <div class="info-item">
                        <div class="info-label">💡 Why Contact Us?</div>
                        <div class="info-value">
                            ✓ Learn about our 60-day free trial<br>
                            ✓ Get pricing tailored to your venue<br>
                            ✓ Schedule a demo<br>
                            ✓ Ask questions about products<br>
                            ✓ Become a sales partner
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="form-wrapper">
                    <h3>Quick Inquiry</h3>
                    <div class="success-message" id="successMessage">
                        ✓ Thank you! We'll be in touch within 24 hours.
                    </div>
                    <form onsubmit="handleSubmit(event)">
                        <div class="form-group">
                            <label for="name">Your Name *</label>
                            <input type="text" id="name" name="name" required>
                        </div>

                        <div class="form-group">
                            <label for="venue">Venue Name *</label>
                            <input type="text" id="venue" name="venue" required>
                        </div>

                        <div class="form-group">
                            <label for="email">Email Address *</label>
                            <input type="email" id="email" name="email" required>
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone Number *</label>
                            <input type="tel" id="phone" name="phone" required>
                        </div>

                        <div class="form-group">
                            <label for="venue-type">Venue Type *</label>
                            <select id="venue-type" name="venue-type" required>
                                <option value="">Select your venue type</option>
                                <option value="music-studio">Music Studio</option>
                                <option value="gym">Gym & Fitness</option>
                                <option value="office">Corporate Office</option>
                                <option value="healthcare">Healthcare Facility</option>
                                <option value="sports">Sports Complex</option>
                                <option value="education">Library/School</option>
                                <option value="coworking">Coworking Space</option>
                                <option value="retail">Retail Location</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="traffic">Daily Foot Traffic (approx.) *</label>
                            <select id="traffic" name="traffic" required>
                                <option value="">Select range</option>
                                <option value="0-50">0-50 people/day</option>
                                <option value="50-100">50-100 people/day</option>
                                <option value="100-200">100-200 people/day</option>
                                <option value="200-500">200-500 people/day</option>
                                <option value="500+">500+ people/day</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="message">Tell Us About Your Venue *</label>
                            <textarea id="message" name="message" placeholder="Location, current situation, what you're looking for..." required></textarea>
                        </div>

                        <button type="submit" class="submit-btn">Send Inquiry</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq">
        <h2>Frequently Asked Questions</h2>
        <div class="container">
            <div class="faq-item">
                <h4>
                    How much does a Techworm machine cost?
                    <span class="faq-toggle">+</span>
                </h4>
                <div class="faq-answer">
                    Zero! We provide, install, and maintain all equipment at no cost to you. You only earn revenue through sales commissions.
                </div>
            </div>

            <div class="faq-item">
                <h4>
                    What's the commission rate?
                    <span class="faq-toggle">+</span>
                </h4>
                <div class="faq-answer">
                    Typically 10-25% of gross profit, depending on location and machine type. We calculate profit as: (Total Sales) - (Cost of Goods) - (Credit Card Fees) - (Networking Fee).
                </div>
            </div>

            <div class="faq-item">
                <h4>
                    What if I don't like the machine?
                    <span class="faq-toggle">+</span>
                </h4>
                <div class="faq-answer">
                    No problem! We offer a 60-day no-obligation trial. If you're not happy, we remove the machine free of charge. No penalties, no hassles.
                </div>
            </div>

            <div class="faq-item">
                <h4>
                    Who stocks and maintains the machine?
                    <span class="faq-toggle">+</span>
                </h4>
                <div class="faq-answer">
                    We do! We handle all restocking, maintenance, repairs, and customer service. You just collect the revenue.
                </div>
            </div>

            <div class="faq-item">
                <h4>
                    Can I stock my own products?
                    <span class="faq-toggle">+</span>
                </h4>
                <div class="faq-answer">
                    Yes! You can request specific products or even your own merchandise. We work with you to create the perfect product mix for your venue.
                </div>
            </div>

            <div class="faq-item">
                <h4>
                    How do payments work?
                    <span class="faq-toggle">+</span>
                </h4>
                <div class="faq-answer">
                    We track all sales through our AI system and send monthly commission payments. You get a detailed breakdown of all transactions.
                </div>
            </div>

            <div class="faq-item">
                <h4>
                    What venues work best for Techworm?
                    <span class="faq-toggle">+</span>
                </h4>
                <div class="faq-answer">
                    Music studios, gyms, offices, healthcare facilities, sports complexes, libraries, schools, and any venue with regular foot traffic and space for a machine.
                </div>
            </div>

            <div class="faq-item">
                <h4>
                    Can you service my area?
                    <span class="faq-toggle">+</span>
                </h4>
                <div class="faq-answer">
                    We're based in Pittsburgh, PA and primarily service the Pittsburgh area and surrounding communities. Contact us to check if we serve your location.
                </div>
            </div>

            <div class="faq-item">
                <h4>
                    How long does installation take?
                    <span class="faq-toggle">+</span>
                </h4>
                <div class="faq-answer">
                    Most installations are completed within a few days of approval. We'll schedule a convenient time that works for your venue.
                </div>
            </div>

            <div class="faq-item">
                <h4>
                    Can I become a Techworm sales partner?
                    <span class="faq-toggle">+</span>
                </h4>
                <div class="faq-answer">
                    Yes! We offer independent sales representative opportunities. Contact us to learn more about our commission structure for partners.
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2025 Techworm Vending. All rights reserved. | Pittsburgh, PA</p>
        <p>AI-Powered Smart Vending Solutions</p>
    </footer>

    <script>
        // FAQ Toggle
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const h4 = item.querySelector('h4');
            const answer = item.querySelector('.faq-answer');
            const toggle = item.querySelector('.faq-toggle');

            h4.addEventListener('click', () => {
                answer.classList.toggle('active');
                toggle.textContent = answer.classList.contains('active') ? '−' : '+';
            });
        });

        // Form Submission
        function handleSubmit(event) {
            event.preventDefault();
            
            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';
            
            // Reset form
            event.target.reset();
            
            // Hide message after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
            }, 5000);
        }
    </script>
</body>
</html>
