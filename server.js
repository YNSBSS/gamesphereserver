const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors({
  origin: "*"  // or "*" to allow any origin
}));app.use(bodyParser.json({ limit: "10mb" }));

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, matricule, qrDataUrl } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "gamesphere.event@gmail.com",
        pass: "ljxn vtsv pzvs ehat"
      }
    });

    const mailOptions = {
      from: '"GameSphere 2025" <gamesphere.event@gmail.com>',
      to: email,
      subject: "Your GameSphere Guest Pass",
      html: `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; overflow: hidden; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); position: relative;">
  <!-- Background Layer -->
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: url('https://i.pinimg.com/originals/b5/b0/c2/b5b0c203956f6ee7468bfdc4b0ac0d17.jpg') center/cover; opacity: 0.15; z-index: 0;"></div>
  
  <!-- Content Container -->
  <div style="position: relative; z-index: 1; background: rgba(1, 14, 31, 0.9); backdrop-filter: blur(2px);">
    <!-- Glowing Header -->
    <div style="background: linear-gradient(135deg, #010E1F 0%, #0a1a3a 100%); padding: 25px 20px; text-align: center; border-bottom: 2px solid #e000c6; position: relative;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at center, rgba(224,0,198,0.3) 0%, transparent 70%); z-index: -1;"></div>
      <img src="https://game-sphere-event.netlify.app/static/media/logo.0b6bc2efdf5cde423c37.png" alt="GameSphere Logo" style="height: 60px; margin-bottom: 15px; filter: drop-shadow(0 0 10px rgba(224,0,198,0.5));">
      <h1 style="color: #e000c6; margin: 0; font-size: 32px; font-weight: 800; letter-spacing: 1px; text-shadow: 0 2px 10px rgba(224,0,198,0.4);">GAME SPHERE 2025</h1>
      <p style="margin: 8px 0 0; font-size: 16px; color: #96e1ee; font-weight: 300; text-transform: uppercase; letter-spacing: 2px;">YOUR EXCLUSIVE GAMING PASS</p>
    </div>
    
    <!-- Ticket Body -->
    <div style="padding: 0 25px 25px;">
      <!-- Event Details Card -->
      <div style="background: rgba(5, 20, 40, 0.7); border-radius: 10px; padding: 20px; margin-top: 25px; border: 1px solid rgba(150, 225, 238, 0.2); box-shadow: 0 5px 15px rgba(0,0,0,0.3);">
        <div style="display: flex; align-items: center; margin-bottom: 15px;">
          <div style="width: 4px; height: 25px; background: #e000c6; margin-right: 12px; border-radius: 2px;"></div>
          <h2 style="color: #96e1ee; font-size: 20px; margin: 0; font-weight: 600; letter-spacing: 1px;">EVENT DETAILS</h2>
        </div>
        
        <div style="display: grid; grid-template-columns: 30px 1fr; gap: 12px; align-items: center;">
          <div style="color: #e000c6; font-size: 18px;">📅</div>
          <p style="margin: 0; color: white; font-size: 15px;"><strong>Date & Time:</strong> 20-22 April 2025 • 9AM to 4PM</p>
          
          <div style="color: #e000c6; font-size: 18px;">📍</div>
          <p style="margin: 0; color: white; font-size: 15px;"><strong>Location:</strong> USTHB, University Auditorium</p>
          
          <div style="color: #e000c6; font-size: 18px;">👤</div>
          <p style="margin: 0; color: white; font-size: 15px;"><strong>Ticket Holder:</strong> ${firstName} ${lastName} </p>
        </div>
      </div>
      
      <!-- QR Code Section -->
      <div style="background: rgba(5, 20, 40, 0.7); border-radius: 10000px 10px 10px 10px; padding: 30px 20px; margin: 25px 0; text-align: center; border: 1px solid rgba(150, 225, 238, 0.2); position: relative; overflow: hidden;">
        <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: #e000c6; border-radius: 0 0 0 100px; opacity: 0.1;"></div>
        <img src="cid:qr-code" alt="QR Code" style="width: 180px; height: 180px; border: 2px solid #e000c6; padding: 10px; background: white; box-shadow: 0 5px 15px rgba(0,0,0,0.3); border-radius: 8px;">
        <p style="margin-top: 15px; font-size: 13px; color: #96e1ee; letter-spacing: 1px; text-transform: uppercase;">SCAN AT ENTRANCE</p>
      </div>
      
      <!-- Terms Section -->
      <div style="background: rgba(5, 20, 40, 0.7); border-radius: 10px; padding: 20px; margin-bottom: 25px; border: 1px solid rgba(150, 225, 238, 0.2);">
        <div style="display: flex; align-items: center; margin-bottom: 15px;">
          <div style="width: 4px; height: 25px; background: #e000c6; margin-right: 12px; border-radius: 2px;"></div>
          <h3 style="color: #96e1ee; font-size: 18px; margin: 0; font-weight: 600; letter-spacing: 1px;">TERMS & CONDITIONS</h3>
        </div>
        
        <ul style="padding-left: 20px; margin: 0; list-style-type: none;">
          <li style="margin-bottom: 10px; position: relative; padding-left: 25px; color: white; font-size: 13px; line-height: 1.5;">
            <span style="position: absolute; left: 0; color: #e000c6; font-weight: bold;">•</span>
            Valid only for 20-22 April 2025 - Non-transferable
          </li>
          <li style="margin-bottom: 10px; position: relative; padding-left: 25px; color: white; font-size: 13px; line-height: 1.5;">
            <span style="position: absolute; left: 0; color: #e000c6; font-weight: bold;">•</span>
            ID verification may be required at entrance
          </li>
          <li style="margin-bottom: 10px; position: relative; padding-left: 25px; color: white; font-size: 13px; line-height: 1.5;">
            <span style="position: absolute; left: 0; color: #e000c6; font-weight: bold;">•</span>
            Ensure QR code is clearly visible if printed
          </li>
        </ul>
      </div>

      <!-- Sponsors & Partners Section -->
      <div style="background: rgba(5, 20, 40, 0.7); border-radius: 10px; padding: 20px; margin-bottom: 25px; border: 1px solid rgba(150, 225, 238, 0.2);">
        <div style="display: flex; align-items: center; margin-bottom: 15px;">
          <div style="width: 4px; height: 25px; background: #e000c6; margin-right: 12px; border-radius: 2px;"></div>
          <h3 style="color: #96e1ee; font-size: 18px; margin: 0; font-weight: 600; letter-spacing: 1px;">OUR SPONSORS & PARTNERS</h3>
        </div>
        
        <!-- Sponsors Row -->
        <div style="text-align: center; margin-bottom: 20px;">
          <p style="color: #96e1ee; font-size: 14px; margin-bottom: 10px;">Proudly Sponsored By</p>
          <div style="display: flex; justify-content: center; gap: 30px; margin-bottom: 15px;">
            <img src="data:image/png;base64,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" alt="STREAM" style="max-width: 120px; max-height: 60px; object-fit: contain;">
            <img src="data:image/jpeg;base64,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" alt="ACI GALAXY" style="max-width: 120px; max-height: 60px; object-fit: contain;">
          </div>
        </div>
        
        <!-- Partners Row -->
        <div style="text-align: center;">
          <p style="color: #96e1ee; font-size: 14px; margin-bottom: 10px;">In Partnership With</p>
          <div style="display: flex; justify-content: center; gap: 30px;">
            <img src="https://game-sphere-event.netlify.app/static/media/Logo-ANCES.d9939dd8d6d386a8bb6e.png" alt="Partner 1" style="max-width: 100px; max-height: 50px; object-fit: contain;">
            <img src="https://game-sphere-event.netlify.app/static/media/fdzdz.2d749d1c8007b36318aa.jpeg" alt="Partner 2" style="max-width: 100px; max-height: 50px; object-fit: contain;">
          </div>
        </div>
      </div>
    </div>
    
    <!-- Glowing Footer -->
    <div style="background: linear-gradient(135deg, #0a1a3a 0%,  #010E1F 100%); padding: 15px 0; text-align: center; border-top: 2px solid rgba(224,0,198,0.3); position: relative;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at center, rgba(150, 225, 238, 0.1) 0%, transparent 70%); z-index: -1;"></div>
      <p style="margin: 0 0 5px; font-size: 14px; color: #96e1ee; font-weight: 600; letter-spacing: 1px;">PRESENTED BY GAMEPHERE</p>
      <p style="margin: 0; font-size: 12px; color: rgba(150, 225, 238, 0.7);">For assistance: <a href="mailto:gamesphere.event@gmail.com" style="color: #e000c6; text-decoration: none; font-weight: 600;">gamesphere.event@gmail.com</a></p>
      <p style="margin: 0; font-size: 12px; color: rgba(150, 225, 238, 0.7);">Our Website: <a href="https://game-sphere-event.netlify.app/" style="color: #e000c6; text-decoration: none; font-weight: 600;">GAME SPHERE</a></p>
      <!-- Social Links Section -->
      <div style="text-align: center; margin: 30px 0;">
        <p style="color: #96e1ee; font-size: 14px; margin-bottom: 10px;">Follow us for updates:</p>
        <div style="display: flex; justify-content: center;margin-left:30%; gap: 15px; flex-wrap: wrap;">
          <a href="https://www.facebook.com/share/1AMpETxp3r/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=50&id=13912&format=png" alt="Facebook" width="40" height="40" />
          </a>
          <a href="https://www.instagram.com/game____sphere?igsh=MTlra2NrOTdzaDN0bA==" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=50&id=32323&format=png" alt="Instagram" width="40" height="40" />
          </a>
          <a href="https://www.tiktok.com/@game__sphere?_t=ZM-8u7ynZkeu2g&_r=1" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=50&id=118640&format=png" alt="TikTok" width="40" height="40" />
          </a>
          <a href="https://twitch.tv/game__sphere" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=50&id=7qFfaszJSlTs&format=png" alt="Twitch" width="40" height="40" />
          </a>
          <a href="https://discord.gg/CzMJ2MnvJn" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=50&id=2mIgusGquJFz&format=png" alt="Discord" width="40" height="40" />
          </a>
          <a href="https://www.youtube.com/@gamesphere-w8s" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/?size=50&id=9a46bTk3awwI&format=png" alt="Youtube" width="40" height="40" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
      `,
      attachments: [
        {
          filename: "qrcode.png",
          content: qrDataUrl.split("base64,")[1],
          encoding: "base64",
          cid: "qr-code" // referenced in the HTML img src
        }
      ]
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("❌ Email sending error:", error.message);
    res.status(500).json({ error: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
