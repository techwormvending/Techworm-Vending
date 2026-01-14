<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>For Venues - Techworm Vending Smart Retail Solutions</title>
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

        .benefits {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
        }

        .benefit-card {
            background: linear-gradient(135deg, rgba(15, 30, 58, 0.8), rgba(26, 47, 74, 0.8));
            padding: 2rem;
            border-radius: 10px;
            border: 1px solid rgba(0, 217, 255, 0.2);
        }

        .benefit-card h3 {
            color: #00d9ff;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .benefit-card p {
            color: #e0e0e0;
        }

        .venues-showcase {
            background: rgba(0, 217, 255, 0.02);
            border-top: 1px solid rgba(0, 217, 255, 0.2);
            border-bottom: 1px solid rgba(0, 217, 255, 0.2);
        }

        .venues-showcase h2 {
            color: #00d9ff;
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            text-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
        }

        .venue-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .venue-card {
            background: linear-gradient(135deg, rgba(15, 30, 58, 0.8), rgba(26, 47, 74, 0.8));
            border: 1px solid rgba(0, 217, 255, 0.2);
            border-radius: 10px;
            overflow: hidden;
            transition: all 0.3s;
        }

        .venue-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 217, 255, 0.25);
            border-color: rgba(0, 217, 255, 0.5);
        }

        .venue-icon {
            background: linear-gradient(135deg, #00d9ff, #00a8cc);
            color: #0a0e27;
            padding: 2rem;
            text-align: center;
            font-size: 3rem;
        }

        .venue-content {
            padding: 2rem;
        }

        .venue-content h3 {
            color: #00d9ff;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .venue-content p {
            color: #e0e0e0;
            margin-bottom: 1rem;
        }

        .venue-benefit {
            display: flex;
            align-items: flex-start;
            margin-bottom: 1rem;
            font-size: 0.95rem;
            color: #d0d0d0;
        }

        .venue-benefit-icon {
            color: #00d9ff;
            margin-right: 0.8rem;
            font-weight: bold;
        }

        .case-studies {
            background: linear-gradient(135deg, #0a1628 0%, #1a3a4a 100%);
            padding: 4rem 2rem;
            border-top: 1px solid rgba(0, 217, 255, 0.2);
        }

        .case-studies h2 {
            color: #00d9ff;
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            text-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
        }

        .case-study {
            background: rgba(0, 217, 255, 0.1);
            border: 1px solid rgba(0, 217, 255, 0.3);
            border-radius: 10px;
            padding: 2rem;
            margin-bottom: 2rem;
        }

        .case-study h3 {
            color: #00d9ff;
            margin-bottom: 1rem;
        }

        .case-study p {
            color: #e0e0e0;
            margin-bottom: 1rem;
        }

        .case-stat {
            display: inline-block;
            background: linear-gradient(135deg, #00d9ff, #00a8cc);
            color: #0a0e27;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            margin-right: 1rem;
            margin-bottom: 0.5rem;
            font-weight: bold;
        }

        .how-it-works {
            background: rgba(0, 217, 255, 0.02);
            border-top: 1px solid rgba(0, 217, 255, 0.2);
            border-bottom: 1px solid rgba(0, 217, 255, 0.2);
        }

        .how-it-works h2 {
            color: #00d9ff;
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            text-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
        }

        .steps-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }

        .step {
            background: linear-gradient(135deg, rgba(15, 30, 58, 0.8), rgba(26, 47, 74, 0.8));
            padding: 2rem;
            border-radius: 8px;
            border: 1px solid rgba(0, 217, 255, 0.2);
            text-align: center;
        }

        .step-number {
            background: linear-gradient(135deg, #00d9ff, #00a8cc);
            color: #0a0e27;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            font-weight: bold;
            margin: 0 auto 1rem;
            box-shadow: 0 0 20px rgba(0, 217, 255, 0.4);
        }

        .step h4 {
            color: #00d9ff;
            margin-bottom: 0.8rem;
        }

        .step p {
            color: #e0e0e0;
        }

        footer {
            background: #05081a;
            color: #a0a0a0;
            text-align: center;
            padding: 2rem;
            font-size: 0.9rem;
            border-top: 1px solid rgba(0, 217, 255, 0.2);
        }

        .btn {
            display: inline-block;
            padding: 0.8rem 2rem;
            background: linear-gradient(135deg, #00d9ff, #00a8cc);
            color: #0a0e27;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
        }

        .btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 25px rgba(0, 217, 255, 0.5);
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }

            nav ul {
                gap: 1rem;
                font-size: 0.9rem;
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
                <li><a href="venues.html" style="color: #00d9ff;">For Venues</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <h1>For Venue Partners</h1>
        <p>Zero-cost, zero-hassle AI-powered retail. We handle everything.</p>
    </section>

    <!-- Benefits -->
    <section>
        <div class="container">
            <div class="benefits">
                <div class="benefit-card">
                    <h3>💰 Zero Cost</h3>
                    <p>No upfront investment. We purchase, install, and maintain all equipment at zero cost to you.</p>
                </div>
                <div class="benefit-card">
                    <h3>💵 Revenue Share</h3>
                    <p>Earn 10-25% commission on every sale. Real income from existing foot traffic.</p>
                </div>
                <div class="benefit-card">
                    <h3>⏰ 24/7 Service</h3>
                    <p>Convenience retail operating around the clock. Customer satisfaction increases.</p>
                </div>
                <div class="benefit-card">
                    <h3>🚀 Easy Setup</h3>
                    <p>60-day trial with no obligation. If you don't love it, we remove it free of charge.</p>
                </div>
                <div class="benefit-card">
                    <h3>📊 Real-Time Data</h3>
                    <p>Track sales, inventory, and performance through our dashboard anytime.</p>
                </div>
                <div class="benefit-card">
                    <h3>🤝 Full Support</h3>
                    <p>We handle restocking, maintenance, repairs, and customer service. You just collect revenue.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Venues Showcase -->
    <section class="venues-showcase">
        <h2>Perfect For Your Venue Type</h2>
        <div class="container">
            <div class="venue-grid">
                <!-- Music Studios -->
                <div class="venue-card">
                    <div class="venue-icon">🎵</div>
                    <div class="venue-content">
                        <h3>Music Studios</h3>
                        <p>Students and musicians need sustained energy and throat care products.</p>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Throat lozenges & water</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Energy drinks</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Protein snacks</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Premium beverages</span>
                        </div>
                    </div>
                </div>

                <!-- Gyms & Fitness -->
                <div class="venue-card">
                    <div class="venue-icon">🏋️</div>
                    <div class="venue-content">
                        <h3>Gyms & Fitness</h3>
                        <p>Athletes want premium hydration and post-workout protein options.</p>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Premium water brands</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Sports drinks</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Protein bars</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Electrolyte drinks</span>
                        </div>
                    </div>
                </div>

                <!-- Corporate Offices -->
                <div class="venue-card">
                    <div class="venue-icon">🏢</div>
                    <div class="venue-content">
                        <h3>Corporate Offices</h3>
                        <p>Busy professionals value quick, convenient refreshment options.</p>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Diverse beverages</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Healthy snacks</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Coffee options</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Quick meals</span>
                        </div>
                    </div>
                </div>

                <!-- Healthcare -->
                <div class="venue-card">
                    <div class="venue-icon">🏥</div>
                    <div class="venue-content">
                        <h3>Healthcare Facilities</h3>
                        <p>Staff and visitors need healthy, quality refreshment options.</p>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Healthy beverages</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Low-sugar options</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Nutritious snacks</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Dietary options</span>
                        </div>
                    </div>
                </div>

                <!-- Sports Complexes -->
                <div class="venue-card">
                    <div class="venue-icon">⚽</div>
                    <div class="venue-content">
                        <h3>Sports Complexes</h3>
                        <p>High-traffic venues with diverse customer needs throughout the day.</p>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Sports drinks</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Energy snacks</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Quick meals</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Premium beverages</span>
                        </div>
                    </div>
                </div>

                <!-- Libraries & Schools -->
                <div class="venue-card">
                    <div class="venue-icon">📚</div>
                    <div class="venue-content">
                        <h3>Libraries & Schools</h3>
                        <p>Students and patrons need affordable snack and beverage options.</p>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Affordable drinks</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Healthy snacks</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Study-friendly items</span>
                        </div>
                        <div class="venue-benefit">
                            <span class="venue-benefit-icon">✓</span>
                            <span>Popular brands</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Case Studies -->
    <section class="case-studies">
        <h2>Success Stories</h2>
        <div class="container">
            <div class="case-study">
                <h3>🎵 Pittsburgh Music Studio</h3>
                <p>A music studio with 15 students per day integrated a Techworm Mini machine. Students appreciated the convenient throat lozenges and water options during vocal sessions.</p>
                <div>
                    <span class="case-stat">$200-300/month</span>
                    <span class="case-stat">Zero upfront cost</span>
                    <span class="case-stat">100% satisfaction</span>
                </div>
            </div>

            <div class="case-study">
                <h3>🏋️ Local Fitness Center</h3>
                <p>A gym with 200+ daily members deployed a Techworm Max machine with premium hydration options. Members increased visits, facility revenue increased significantly.</p>
                <div>
                    <span class="case-stat">$900+/month</span>
                    <span class="case-stat">60-day trial → permanent</span>
                    <span class="case-stat">Expanded to 2 machines</span>
                </div>
            </div>

            <div class="case-study">
                <h3>🏢 Tech Company Office</h3>
                <p>A 100-person tech company installed a Techworm Pro for employee convenience. Increased employee satisfaction and engagement.</p>
                <div>
                    <span class="case-stat">$500-600/month</span>
                    <span class="case-stat">Customized product mix</span>
                    <span class="case-stat">Employee favorite</span>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works -->
    <section class="how-it-works">
        <h2>The 60-Day No-Obligation Trial</h2>
        <div class="container">
            <div class="steps-grid">
                <div class="step">
                    <div class="step-number">1</div>
                    <h4>Contact Us</h4>
                    <p>Tell us about your venue, traffic, and needs.</p>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <h4>We Install</h4>
                    <p>Free installation at zero cost. We handle everything.</p>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <h4>60-Day Trial</h4>
                    <p>Test the machine risk-free with no obligation.</p>
                </div>
                <div class="step">
                    <div class="step-number">4</div>
                    <h4>Decide</h4>
                    <p>Love it? Keep it and earn revenue. Want it gone? We remove it free.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section style="background: linear-gradient(135deg, #0a1628 0%, #1a3a4a 100%); padding: 4rem 2rem; text-align: center; border-top: 1px solid rgba(0, 217, 255, 0.2);">
        <div class="container">
            <h2 style="color: #00d9ff; font-size: 2.5rem; margin-bottom: 1.5rem; text-shadow: 0 0 20px rgba(0, 217, 255, 0.3);">Ready to Increase Revenue?</h2>
            <p style="color: #e0e0e0; font-size: 1.1rem; margin-bottom: 2rem;">Start your 60-day trial today. Zero risk, all reward.</p>
            <a href="contact.html" class="btn">Get Started Now</a>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2025 Techworm Vending. All rights reserved. | Pittsburgh, PA</p>
        <p>EIN: 39-4550870 | AI-Powered Smart Vending Solutions</p>
    </footer>
</body>
</html>
