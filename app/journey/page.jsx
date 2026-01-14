<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Techworm Vending - AI-Powered Smart Vending Machines</title>
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
            opacity: 0.8;
        }

        .hero {
            background: linear-gradient(135deg, #0a1628 0%, #1a3a4a 100%);
            color: white;
            padding: 5rem 2rem;
            text-align: center;
            min-height: 600px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-bottom: 1px solid rgba(0, 217, 255, 0.2);
            box-shadow: inset 0 0 50px rgba(0, 217, 255, 0.05);
        }

        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            font-weight: bold;
            color: #00d9ff;
            text-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
        }

        .hero .tagline {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            opacity: 0.95;
            color: #e0e0e0;
        }

        .cta-buttons {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 2rem;
        }

        .btn {
            padding: 1rem 2.5rem;
            font-size: 1.1rem;
            border: none;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s;
            font-weight: bold;
            text-decoration: none;
            display: inline-block;
        }

        .btn-primary {
            background: #00d9ff;
            color: #0a0e27;
            box-shadow: 0 4px 15px rgba(0, 217, 255, 0.3);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 25px rgba(0, 217, 255, 0.5);
            background: #00f0ff;
        }

        .btn-secondary {
            background: transparent;
            color: #00d9ff;
            border: 2px solid #00d9ff;
        }

        .btn-secondary:hover {
            background: rgba(0, 217, 255, 0.1);
            box-shadow: 0 0 15px rgba(0, 217, 255, 0.3);
        }

        .highlight {
            background: rgba(0, 217, 255, 0.15);
            padding: 0.3rem 0.8rem;
            border-radius: 5px;
            border: 1px solid rgba(0, 217, 255, 0.3);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
        }

        section {
            padding: 4rem 2rem;
        }

        .free-service {
            background: rgba(0, 217, 255, 0.05);
            border-left: 5px solid #00d9ff;
            padding: 2rem;
            margin: 3rem 0;
            border-radius: 8px;
            border: 1px solid rgba(0, 217, 255, 0.2);
        }

        .free-service h3 {
            color: #00d9ff;
            margin-bottom: 1rem;
            font-size: 1.8rem;
            text-shadow: 0 0 15px rgba(0, 217, 255, 0.3);
        }

        .free-service p {
            color: #e0e0e0;
            font-size: 1.1rem;
        }

        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
        }

        .feature-card {
            background: linear-gradient(135deg, rgba(15, 30, 58, 0.8), rgba(26, 47, 74, 0.8));
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 217, 255, 0.1);
            text-align: center;
            transition: transform 0.3s;
            border: 1px solid rgba(0, 217, 255, 0.2);
            color: #e0e0e0;
        }

        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 217, 255, 0.25);
            border-color: rgba(0, 217, 255, 0.5);
        }

        .feature-card .icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .feature-card h4 {
            color: #00d9ff;
            margin-bottom: 0.5rem;
            font-size: 1.3rem;
        }

        .machines {
            background: rgba(0, 217, 255, 0.02);
            border-top: 1px solid rgba(0, 217, 255, 0.2);
            border-bottom: 1px solid rgba(0, 217, 255, 0.2);
        }

        .machines h2 {
            color: #00d9ff;
            text-align: center;
            margin-bottom: 3rem;
            font-size: 2.5rem;
            text-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
        }

        .machine-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .machine-type {
            background: linear-gradient(135deg, rgba(15, 30, 58, 0.6), rgba(26, 47, 74, 0.6));
            padding: 1.5rem;
            border-radius: 8px;
            border: 2px solid rgba(0, 217, 255, 0.2);
            text-align: center;
            color: #e0e0e0;
        }

        .machine-type:hover {
            border-color: #00d9ff;
            box-shadow: 0 4px 20px rgba(0, 217, 255, 0.3);
            background: linear-gradient(135deg, rgba(15, 30, 58, 0.9), rgba(26, 47, 74, 0.9));
        }

        .machine-type h4 {
            color: #00d9ff;
            margin: 1rem 0;
            font-size: 1.3rem;
        }

        .venues {
            background: linear-gradient(135deg, #0a1628 0%, #1a2f4a 100%);
            border-top: 1px solid rgba(0, 217, 255, 0.2);
        }

        .venues h2 {
            color: #00d9ff;
            text-align: center;
            margin-bottom: 2rem;
            font-size: 2.5rem;
            text-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
        }

        .venue-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .venue-item {
            background: rgba(0, 217, 255, 0.1);
            padding: 1.5rem;
            border-radius: 8px;
            text-align: center;
            color: #00d9ff;
            font-weight: 500;
            border: 1px solid rgba(0, 217, 255, 0.3);
            transition: all 0.3s;
        }

        .venue-item:hover {
            background: rgba(0, 217, 255, 0.2);
            box-shadow: 0 0 15px rgba(0, 217, 255, 0.2);
        }

        .contact-section {
            background: linear-gradient(135deg, #0a1628 0%, #1a3a4a 100%);
            color: white;
            text-align: center;
            padding: 4rem 2rem;
            border-top: 1px solid rgba(0, 217, 255, 0.2);
            border-bottom: 1px solid rgba(0, 217, 255, 0.2);
            box-shadow: inset 0 0 50px rgba(0, 217, 255, 0.05);
        }

        .contact-section h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #00d9ff;
            text-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
        }

        .contact-section p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.95;
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

        .how-it-works {
            background: white;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }

        .step {
            text-align: center;
            padding: 2rem;
            background: linear-gradient(135deg, rgba(15, 30, 58, 0.8), rgba(26, 47, 74, 0.8));
            border-radius: 8px;
            border: 1px solid rgba(0, 217, 255, 0.2);
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
            margin-bottom: 0.5rem;
        }

        .step p {
            color: #e0e0e0;
        }

        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.5);
            animation: fadeIn 0.3s;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .modal-content {
            background-color: #1a2f4a;
            margin: 5% auto;
            padding: 2rem;
            border-radius: 10px;
            width: 90%;
            max-width: 500px;
            box-shadow: 0 10px 40px rgba(0, 217, 255, 0.3);
            border: 1px solid rgba(0, 217, 255, 0.3);
        }

        .close {
            color: #00d9ff;
            float: right;
            font-size: 2rem;
            font-weight: bold;
            cursor: pointer;
        }

        .close:hover {
            color: #00f0ff;
        }

        .modal h2 {
            color: #00d9ff;
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
            min-height: 100px;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #00d9ff;
            box-shadow: 0 0 15px rgba(0, 217, 255, 0.4);
            background: rgba(15, 30, 58, 0.95);
        }

        .submit-btn {
            background: linear-gradient(135deg, #00d9ff, #00a8cc);
            color: #0a0e27;
            padding: 0.8rem 2rem;
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

        .video-section {
            background: linear-gradient(135deg, rgba(10, 22, 40, 0.95), rgba(26, 47, 74, 0.95));
            padding: 4rem 2rem;
            border-top: 1px solid rgba(0, 217, 255, 0.2);
            border-bottom: 1px solid rgba(0, 217, 255, 0.2);
        }

        .video-section h2 {
            color: #00d9ff;
            text-align: center;
            margin-bottom: 2rem;
            font-size: 2.5rem;
            text-shadow: 0 0 20px rgba(0, 217, 255, 0.3);
        }

        .video-container {
            max-width: 900px;
            margin: 0 auto;
            position: relative;
            width: 100%;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
            border-radius: 10px;
            border: 2px solid rgba(0, 217, 255, 0.3);
            box-shadow: 0 0 30px rgba(0, 217, 255, 0.2);
        }

        .video-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
        }

        @media (max-width: 768px) {
            .video-section {
                padding: 2rem 1rem;
            }

            .video-section h2 {
                font-size: 1.8rem;
            }
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2.5rem;
            }

            .hero .tagline {
                font-size: 1.2rem;
            }

            nav ul {
                gap: 1rem;
                font-size: 0.9rem;
            }

            .cta-buttons {
                flex-direction: column;
            }

            .btn {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <!-- Header/Navigation -->
    <header>
        <nav>
            <div class="logo">
                <img src="tech_logo.jpg" alt="Techworm Vending">
                <span>TECHWORM</span>
            </div>
            <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#machines">Machines</a></li>
                <li><a href="#venues">For Venues</a></li>
                <li><a href="#contact" onclick="openContactModal()">Contact</a></li>
            </ul>
        </nav>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <h1>AI-Powered Smart Vending</h1>
        <p class="tagline">The Future of 24/7 Convenience Retail</p>
        <p style="font-size: 1.3rem; margin-bottom: 2rem;">
            <span class="highlight">✓ FREE Service for Venue Partners</span>
        </p>
        <div class="cta-buttons">
            <button class="btn btn-primary" onclick="openContactModal()">Get Started Today</button>
            <a href="#features" class="btn btn-secondary">Learn More</a>
        </div>
    </section>

    <!-- Main Content -->
    <div class="container">
        <!-- Free Service Section -->
        <section id="features">
            <div class="free-service">
                <h3>🎯 Zero-Cost Placement - We Handle Everything</h3>
                <p>
                    <strong>For venue partners:</strong> Installing a Techworm Vending machine is completely free. We handle all costs including machine purchase, installation, maintenance, restocking, and repairs. You simply provide the space.
                </p>
                <p style="margin-top: 1rem;">
                    <strong>You benefit from:</strong> Revenue sharing (typically 10-25% commission), 24/7 customer convenience, and a professional AI retail solution—all at zero cost to you.
                </p>
            </div>

            <h2 style="color: #00d9ff; margin: 3rem 0 2rem; font-size: 2.2rem;">Why Choose Techworm?</h2>
            
            <div class="features">
                <div class="feature-card">
                    <div class="icon">🤖</div>
                    <h4>AI Technology</h4>
                    <p>Computer vision technology recognizes products instantly. Just tap, grab, and go—no scanning needed.</p>
                </div>
                <div class="feature-card">
                    <div class="icon">📦</div>
                    <h4>Double Capacity</h4>
                    <p>Twice the products per square foot compared to traditional vending machines.</p>
                </div>
                <div class="feature-card">
                    <div class="icon">💳</div>
                    <h4>Contactless Payment</h4>
                    <p>Card tap, mobile payment, and QR code options. Safe, fast, and secure transactions.</p>
                </div>
                <div class="feature-card">
                    <div class="icon">🔒</div>
                    <h4>Fraud Prevention</h4>
                    <p>Temporary authorizations and real-time monitoring prevent fraudulent transactions.</p>
                </div>
                <div class="feature-card">
                    <div class="icon">📊</div>
                    <h4>Real-Time Monitoring</h4>
                    <p>Track sales, inventory, and performance data in real-time from your dashboard.</p>
                </div>
                <div class="feature-card">
                    <div class="icon">🎨</div>
                    <h4>Your Products</h4>
                    <p>Stock any products you want—beverages, snacks, specialty items, or your own merchandise.</p>
                </div>
            </div>
        </section>

        <!-- Machines Section -->
        <section class="machines" id="machines">
            <h2>Choose Your Machine</h2>
            <div class="machine-grid">
                <div class="machine-type">
                    <h4>Mini</h4>
                    <p>Compact & Efficient</p>
                </div>
                <div class="machine-type">
                    <h4>Plus</h4>
                    <p>Increased Capacity</p>
                </div>
                <div class="machine-type">
                    <h4>Max</h4>
                    <p>Maximum Selection</p>
                </div>
                <div class="machine-type">
                    <h4>Pro</h4>
                    <p>Premium Performance</p>
                </div>
                <div class="machine-type">
                    <h4>Frozen</h4>
                    <p>Ice Cream & Frozen</p>
                </div>
                <div class="machine-type">
                    <h4>Double Door</h4>
                    <p>Enterprise Solution</p>
                </div>
            </div>
            <p style="text-align: center; color: #a0a0a0; margin-bottom: 2rem;">
                Plus refrigerated, frozen, and room temperature options to fit any venue
            </p>
        </section>

        <!-- Venues Section -->
        <section class="venues" id="venues">
            <h2>Perfect For</h2>
            <div class="venue-list">
                <div class="venue-item">🎵 Music Studios</div>
                <div class="venue-item">🏋️ Gyms & Fitness</div>
                <div class="venue-item">🏢 Corporate Offices</div>
                <div class="venue-item">🏥 Healthcare Facilities</div>
                <div class="venue-item">⚽ Sports Complexes</div>
                <div class="venue-item">📚 Libraries & Schools</div>
                <div class="venue-item">🤝 Coworking Spaces</div>
                <div class="venue-item">🏪 Retail Locations</div>
            </div>

            <h3 style="color: #00d9ff; margin: 2rem 0 1.5rem; text-align: center;">How It Works</h3>
            <div class="how-it-works">
                <div class="step">
                    <div class="step-number">1</div>
                    <h4>Contact Us</h4>
                    <p>Tell us about your venue and traffic</p>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <h4>We Install</h4>
                    <p>Free installation & setup at zero cost</p>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <h4>We Stock</h4>
                    <p>Regular restocking and maintenance included</p>
                </div>
                <div class="step">
                    <div class="step-number">4</div>
                    <h4>You Earn</h4>
                    <p>Revenue share from every sale</p>
                </div>
            </div>
        </section>
    </div>

    <!-- Video Section -->
    <section class="video-section">
        <h2>See Techworm in Action</h2>
        <div class="video-container">
            <iframe width="100%" height="600" src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section" id="contact">
        <h2>Ready to Get Started?</h2>
        <p>Join Pittsburgh venues benefiting from AI-powered convenience retail</p>
        <button class="btn btn-primary" onclick="openContactModal()">Contact Techworm Today</button>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2025 Techworm Vending. All rights reserved. | Pittsburgh, PA</p>
        <p>EIN: 39-4550870 | AI-Powered Smart Vending Solutions</p>
    </footer>

    <!-- Contact Modal -->
    <div id="contactModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeContactModal()">&times;</span>
            <h2>Get Your Free Machine</h2>
            <form onsubmit="handleSubmit(event)">
                <div class="form-group">
                    <label for="name">Venue Name</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div class="form-group">
                    <label for="contact">Your Name</label>
                    <input type="text" id="contact" name="contact" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" required>
                </div>
                <div class="form-group">
                    <label for="venue-type">Venue Type</label>
                    <input type="text" id="venue-type" name="venue-type" placeholder="e.g., Music Studio, Gym, Office" required>
                </div>
                <div class="form-group">
                    <label for="message">Tell Us About Your Venue</label>
                    <textarea id="message" name="message" placeholder="Location, daily traffic, etc." required></textarea>
                </div>
                <button type="submit" class="submit-btn">Request More Information</button>
            </form>
        </div>
    </div>

    <script>
        const modal = document.getElementById('contactModal');

        function openContactModal() {
            modal.style.display = 'block';
        }

        function closeContactModal() {
            modal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        function handleSubmit(event) {
            event.preventDefault();
            alert('Thank you for your interest! We\'ll be in touch soon.\n\nFor immediate assistance, contact us at support@techwormvending.com');
            closeContactModal();
            document.querySelector('form').reset();
        }
    </script>
</body>
</html>
