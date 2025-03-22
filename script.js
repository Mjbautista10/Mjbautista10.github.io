        // Mobile menu toggle
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
        
        // Form submission handler
        document.getElementById('support-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for submitting your support request. Our team at MMM Innovation will contact you shortly!');
            this.reset();
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
    // Function to open social media links
    function openSocialLink(platform) {
        const socialUrls = {
            'facebook': 'https://www.facebook.com/mmminnovation',
            'twitter': 'https://www.twitter.com/mmminnovation',
            'linkedin': 'https://www.linkedin.com/company/mmminnovation',
            'instagram': 'https://www.instagram.com/mmminnovation'
        };
        
        if (socialUrls[platform]) {
            window.open(socialUrls[platform], '_blank');
        } else {
            console.log('Platform URL not defined:', platform);
        }
    }

    // Immediately add click events to social icons
    // No need to wait for DOMContentLoaded if script is at bottom of page
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            // For existing letter-based icons
            const letterMap = {
                'F': 'facebook',
                't': 'twitter',
                'in': 'linkedin',
                'ig': 'instagram'
            };
            
            // Get platform from data attribute if available, otherwise use text content mapping
            const platform = this.getAttribute('data-platform') || letterMap[this.textContent.trim()];
            
            if (platform) {
                openSocialLink(platform);
            } else {
                console.log('Could not determine social platform from:', this.textContent);
            }
        });
    });

    // Log that we've attached the events (for debugging)
    console.log('Social link handlers attached to', socialIcons.length, 'icons');
// Add this code to the existing script section at the bottom of your HTML file

// Create modal HTML structure and add it to the body
document.body.insertAdjacentHTML('beforeend', `
  <div id="news-modal" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80%; max-width: 700px; height: 80vh; background-color: rgba(0,0,0,0.7); z-index: 1000; overflow-y: auto; border-radius: 10px;">
    <div style="position: relative; background-color: white; margin: auto; padding: 20px; width: 100%; height: 100%; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); overflow-y: auto;">
      <span id="close-modal" style="position: absolute; top: 10px; right: 20px; font-size: 24px; cursor: pointer;">&times;</span>
      <h2 id="modal-title" style="margin-bottom: 20px; color: #1e293b;"></h2>
      <div id="modal-date" style="color: #64748b; margin-bottom: 10px; font-size: 0.9rem;"></div>
      <div id="modal-content" style="color: #1e293b; line-height: 1.6; overflow-y: auto; max-height: 70vh;"></div>
    </div>
  </div>
`);

// News content data - store full articles here
const newsArticles = {
  "windows-security": {
    title: "New Windows Security Update Patches Critical Vulnerabilities",
    date: "February 25, 2025",
    content: `
      <p>Microsoft has released an important security update that addresses several critical vulnerabilities in Windows operating systems. The update, which was released as part of February's Patch Tuesday, fixes 47 security issues including 5 zero-day vulnerabilities that were being actively exploited in the wild.</p>
      
      <p>Security experts at MMM Innovation strongly recommend that all Windows users install this update immediately to protect their systems from potential attacks. The vulnerabilities affect all supported versions of Windows, including Windows 10, Windows 11, and Windows Server.</p>
      
      <h3>Key vulnerabilities addressed:</h3>
      <ul>
        <li>CVE-2025-21841: A remote code execution vulnerability in the Windows Print Spooler</li>
        <li>CVE-2025-22103: An elevation of privilege vulnerability in the Windows Kernel</li>
        <li>CVE-2025-20982: A security feature bypass in Windows Defender</li>
        <li>CVE-2025-23067: A remote code execution vulnerability in Microsoft Exchange Server</li>
      </ul>
      
      <p>"This is one of the most significant security updates we've seen in recent months," said Jane Smith, Chief Security Officer at MMM Innovation. "The fact that several vulnerabilities were already being exploited makes this update particularly urgent."</p>
      
      <h3>How to update:</h3>
      <p>To install the update, Windows users should go to Settings > Update & Security > Windows Update and select "Check for updates". For enterprise environments, IT administrators should deploy the update through their standard patch management systems.</p>
      
      <p>If you need assistance with installing this update or have concerns about compatibility with your systems, please contact our technical support team at MMM Innovation for guidance.</p>
    `
  },
  "maintenance-tips": {
    title: "Top 10 Computer Maintenance Tips for Extended Hardware Life",
    date: "February 20, 2025",
    content: `
      <p>Proper maintenance is essential for keeping your computer hardware running smoothly and extending its operational lifespan. Our tech experts at MMM Innovation have compiled these top 10 maintenance tips that every computer owner should follow.</p>
      
      <h3>1. Regular Dust Cleaning</h3>
      <p>Dust buildup is one of the biggest enemies of computer hardware. It restricts airflow, causing components to overheat and potentially fail prematurely. We recommend cleaning the inside of your desktop computer at least every 6 months using compressed air. For laptops, cleaning the vents and fan areas is crucial.</p>
      
      <h3>2. Manage Your Storage Space</h3>
      <p>Keeping your hard drive or SSD too full can significantly impact performance. Aim to keep at least 15-20% of your storage space free at all times. Regularly uninstall unused programs, delete temporary files, and consider using external storage for large files you don't need to access frequently.</p>
      
      <h3>3. Update Your Software Regularly</h3>
      <p>Software updates often include important performance improvements and security patches. Keep your operating system, drivers, and applications updated to ensure optimal performance and compatibility with your hardware.</p>
      
      <h3>4. Optimize Power Settings</h3>
      <p>Configure your power settings appropriately to balance performance with component longevity. For desktop computers that remain plugged in, the "Balanced" power plan is usually ideal. For laptops, consider using "Power saver" mode when on battery to extend battery life.</p>
      
      <h3>5. Invest in Surge Protection</h3>
      <p>Power surges can cause immediate damage to computer components or contribute to their gradual degradation. Always connect your computer to a quality surge protector or, better yet, an uninterruptible power supply (UPS) that can provide backup power during outages.</p>
      
      <h3>6. Monitor Hardware Temperatures</h3>
      <p>Use software tools to monitor your computer’s internal temperatures. Overheating can lead to hardware damage. If you notice high temperatures, improve ventilation or consider additional cooling solutions.</p>

      <h3>7. Perform Regular Backups</h3>
      <p>Data loss can occur due to hardware failures or system errors. Regularly back up important files to external drives or cloud storage to ensure your data remains safe.</p>

      <h3>8. Avoid Physical Impacts</h3>
      <p>Handle your computer, especially laptops, with care. Physical impacts can damage internal components, leading to costly repairs or data loss.</p>

      <h3>9. Use Reliable Antivirus Software</h3>
      <p>Protect your computer from malware and viruses by installing reputable antivirus software and keeping it updated. Regular scans can help detect and remove threats before they harm your system.</p>

      <h3>10. Maintain a Clean Operating System</h3>
      <p>Over time, unnecessary files and registry entries can clutter your system. Use built-in tools like Disk Cleanup or third-party software to optimize your operating system's performance.</p>

      <p>"Many hardware failures we see could have been prevented with basic maintenance," explains Michael Johnson, Hardware Specialist at MMM Innovation. "These simple steps can add years to your computer's useful life and save you significant money in the long run."</p>
      
      <p>If you need professional maintenance for your computer systems or are experiencing hardware issues, contact our team for expert assistance.</p>
    `

  },
  "smartphone-issues": {
    title: "Common Smartphone Issues and How to Fix Them Yourself",
    date: "February 15, 2025",
    content: `
      <p>Smartphones have become essential tools in our daily lives, but they can sometimes develop problems that disrupt our routines. Before seeking professional help, try these DIY solutions for common smartphone issues.</p>
      
      <h3>Battery Draining Too Quickly</h3>
      <p><strong>Potential solutions:</strong></p>
      <ul>
        <li>Check which apps are consuming battery power in your device settings</li>
        <li>Disable background app refresh for apps you don't need updates from</li>
        <li>Reduce screen brightness or enable auto-brightness</li>
        <li>Turn off location services for apps that don't need it</li>
        <li>Enable battery saver mode when needed</li>
      </ul>
      
      <h3>Phone Running Slowly</h3>
      <p><strong>Potential solutions:</strong></p>
      <ul>
        <li>Restart your device (this fixes many temporary issues)</li>
        <li>Clear app cache in settings</li>
        <li>Uninstall unused apps</li>
        <li>Check for and install system updates</li>
        <li>Free up storage space by deleting old photos, videos, and files</li>
      </ul>
      
      <h3>Overheating Issues</h3>
      <p><strong>Potential solutions:</strong></p>
      <ul>
        <li>Remove the case temporarily to help dissipate heat</li>
        <li>Close resource-intensive apps like games and video streaming</li>
        <li>Avoid using the phone while it's charging</li>
        <li>Keep the phone out of direct sunlight</li>
        <li>If overheating persists, check for malware or consider a factory reset</li>
      </ul>
      
      <h3>Poor Reception or Call Quality</h3>
      <p><strong>Potential solutions:</strong></p>
      <ul>
        <li>Toggle airplane mode on and off to refresh connections</li>
        <li>Restart your device</li>
        <li>Check for carrier settings updates</li>
        <li>Ensure the phone case isn't blocking antennas</li>
        <li>Reset network settings (note: this will remove saved Wi-Fi passwords)</li>
      </ul>
      
      <p>"While these solutions work for many common issues, some problems do require professional diagnosis and repair," notes Sarah Williams, Mobile Device Specialist at MMM Innovation. "If these fixes don't resolve your issue, or if you're dealing with hardware damage like a cracked screen or water damage, we're here to help."</p>
      
      <p>For professional smartphone repair services, contact our technical support team at MMM Innovation.</p>
    `
  }
};


// Add the HTML structure for the Privacy Policy and Terms of Service modals
document.body.insertAdjacentHTML('beforeend', `
  <!-- Privacy Policy Modal -->
  <div id="privacy-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); z-index: 1000; overflow-y: auto;">
    <div style="position: relative; background-color: white; margin: 50px auto; padding: 20px; width: 80%; max-width: 800px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); max-height: 80vh; overflow-y: auto;">
      <span id="close-privacy-modal" style="position: absolute; top: 10px; right: 20px; font-size: 24px; cursor: pointer;">&times;</span>
      <h2 style="color: #1e293b; margin-bottom: 20px;">Privacy Policy</h2>
      <div class="privacy-content">
        <p>At MMM Innovation, we are committed to protecting your privacy. We have developed this policy to ensure transparency in how we collect, use, and safeguard your data while providing basic troubleshooting solutions for laptops.</p>
        
        <h3>1. Information We Collect</h3>
        <ul>
          <li><strong>Personal Information:</strong> Name, email, and contact number (only when voluntarily provided).</li>
          <li><strong>Device Information:</strong> Laptop model, operating system, and basic issue descriptions.</li>
          <li><strong>Usage Data:</strong> Feedback and interaction data to improve our troubleshooting services.</li>
        </ul>
        
        <h3>2. How We Use Your Information</h3>
        <ul>
          <li>To provide effective troubleshooting assistance.</li>
          <li>To enhance and improve our services based on user feedback.</li>
          <li>To notify users of service updates or improvements.</li>
        </ul>
        
        <h3>3. Data Protection & Security</h3>
        <ul>
          <li>We take reasonable measures to protect user data from unauthorized access or misuse.</li>
          <li>Users are responsible for securing their own devices and data.</li>
        </ul>
        
        <h3>4. Information Sharing</h3>
        <ul>
          <li>We do not sell or share user information with third parties.</li>
          <li>We may disclose information if required by law or to protect our rights.</li>
        </ul>
        
        <h3>5. User Rights</h3>
        <ul>
          <li>Users may request access, updates, or deletion of their personal information.</li>
          <li>Users can opt out of communications at any time.</li>
        </ul>
      </div>
    </div>
  </div>
  
  <!-- Terms of Service Modal -->
  <div id="terms-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.7); z-index: 1000; overflow-y: auto;">
    <div style="position: relative; background-color: white; margin: 50px auto; padding: 20px; width: 80%; max-width: 800px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); max-height: 80vh; overflow-y: auto;">
      <span id="close-terms-modal" style="position: absolute; top: 10px; right: 20px; font-size: 24px; cursor: pointer;">&times;</span>
      <h2 style="color: #1e293b; margin-bottom: 20px;">Terms of Service</h2>
      <div class="terms-content">
        <p>By using MMM Innovation, you agree to the following terms:</p>
        
        <h3>1. Service Overview</h3>
        <ul>
          <li>We provide basic laptop troubleshooting designed for non-techy individuals.</li>
          <li>Our solutions are for educational and assistance purposes only and do not replace professional IT services.</li>
        </ul>
        
        <h3>2. User Responsibilities</h3>
        <ul>
          <li>Users must provide accurate information about their device and issues.</li>
          <li>Users acknowledge that troubleshooting solutions may vary by laptop brand and model.</li>
        </ul>
        
        <h3>3. Limitation of Liability</h3>
        <ul>
          <li>MMM Innovation is not responsible for data loss or additional issues that may arise from troubleshooting steps.</li>
          <li>Users are advised to back up important files before applying troubleshooting solutions.</li>
        </ul>
        
        <h3>4. Changes to These Terms</h3>
        <ul>
          <li>We may update this policy as our business evolves.</li>
          <li>Users will be notified of major updates through our official channels.</li>
        </ul>
        
        <p>By using MMM Innovation, you confirm that you have read, understood, and agreed to our Privacy Policy and Terms of Service.</p>
      </div>
    </div>
  </div>
`);

// Add event listeners for the footer links
document.addEventListener('DOMContentLoaded', function() {
  // Get the footer links
  const footerLinks = document.querySelectorAll('.footer-links li a');
  
  // Add click event listeners to the Privacy Policy and Terms of Service links
  footerLinks.forEach(link => {
    if (link.textContent === 'Privacy Policy') {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('privacy-modal').style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      });
    } else if (link.textContent === 'Terms of Service') {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('terms-modal').style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      });
    }
  });

  
  // Close modals when clicking the X
  document.getElementById('close-privacy-modal').addEventListener('click', function() {
    document.getElementById('privacy-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  });
  
  document.getElementById('close-terms-modal').addEventListener('click', function() {
    document.getElementById('terms-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  });
  
  // Close modals when clicking outside the content area
  document.getElementById('privacy-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
  });
  
  document.getElementById('terms-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
  });
});

// Add click handlers for Read More buttons
document.addEventListener('DOMContentLoaded', function() {
  // Map each news card to its content ID
  const newsMap = [
    { index: 0, id: "windows-security" },
    { index: 1, id: "maintenance-tips" },
    { index: 2, id: "smartphone-issues" }
  ];
  
  // Get all Read More buttons
  const readMoreButtons = document.querySelectorAll('.news-card .btn');
  
  // Add click event to each button
  readMoreButtons.forEach((button, index) => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      
      const articleId = newsMap[index].id;
      const article = newsArticles[articleId];
      
      // Populate the modal with the article content
      document.getElementById('modal-title').innerText = article.title;
      document.getElementById('modal-date').innerText = article.date;
      document.getElementById('modal-content').innerHTML = article.content;
      
      // Show the modal
      document.getElementById('news-modal').style.display = 'block';
      
      // Prevent scrolling on the body
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close modal when clicking the X
  document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('news-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  });
  
  // Close modal when clicking outside the content
  document.getElementById('news-modal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.style.display = 'none';
      document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
  });

// Add event listeners for footer links
document.addEventListener('DOMContentLoaded', function() {
  // Add event listeners to the Privacy Policy and Terms of Service links in footer
  const footerLinks = document.querySelectorAll('.footer-links li a');
  
  footerLinks.forEach(link => {
    if (link.textContent === 'Privacy Policy') {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Populate the modal with Privacy Policy content
        document.getElementById('modal-title').innerText = legalArticles["privacy-policy"].title;
        document.getElementById('modal-date').innerText = legalArticles["privacy-policy"].date;
        document.getElementById('modal-content').innerHTML = legalArticles["privacy-policy"].content;
        
        // Show the modal
        document.getElementById('news-modal').style.display = 'block';
        
        // Prevent scrolling on the body
        document.body.style.overflow = 'hidden';
      });
    } else if (link.textContent === 'Terms of Service') {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Populate the modal with Terms of Service content
        document.getElementById('modal-title').innerText = legalArticles["terms-of-service"].title;
        document.getElementById('modal-date').innerText = legalArticles["terms-of-service"].date;
        document.getElementById('modal-content').innerHTML = legalArticles["terms-of-service"].content;
        
        // Show the modal
        document.getElementById('news-modal').style.display = 'block';
        
        // Prevent scrolling on the body
        document.body.style.overflow = 'hidden';
      });
    }
  });
  });
});
