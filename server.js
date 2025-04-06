const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // allow frontend to connect
app.use(bodyParser.json({ limit: "10mb" }));

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, matricule, qrDataUrl } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "younes.boussoussou24@gmail.com",
        pass: "ckdc lnan tkvy jnqu"
      }
    });

    const mailOptions = {
      from: '"GameSphere 2025" <younes.boussoussou24@gmail.com>',
      to: email,
      subject: "🎟️ Your GameSphere 2025 Ticket",
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
          <li style="margin-bottom: 10px; position: relative; padding-left: 25px; color: white; font-size: 13px; line-height: 1.5;">
            <span style="position: absolute; left: 0; color: #e000c6; font-weight: bold;">•</span>
            Non-refundable (except event cancellation)
          </li>
        </ul>
      </div>
    </div>
    
    <!-- Glowing Footer -->
    <div style="background: linear-gradient(135deg, #0a1a3a 0%,  #010E1F 100%); padding: 15px 0; text-align: center; border-top: 2px solid rgba(224,0,198,0.3); position: relative;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: radial-gradient(circle at center, rgba(150, 225, 238, 0.1) 0%, transparent 70%); z-index: -1;"></div>
      <p style="margin: 0 0 5px; font-size: 14px; color: #96e1ee; font-weight: 600; letter-spacing: 1px;">PRESENTED BY GAMEPHERE</p>
      <p style="margin: 0; font-size: 12px; color: rgba(150, 225, 238, 0.7);">For assistance: <a href="mailto:contact@gamesphere.dz" style="color: #e000c6; text-decoration: none; font-weight: 600;">contact@gamesphere.dz</a></p>
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
