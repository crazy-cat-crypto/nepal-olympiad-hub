# Contributors

Thank you for your interest in contributing to the Nepal Olympiad Hub! This project was created to help Nepali students access comprehensive, verified information about international olympiads.

## Project Creator

**Initial Development (December 2024)**
- Created by: Nepal Olympiad Community
- Research compiled from official sources: Mathematical Association of Nepal, Nepal Physical Society, Nepal Astronomical Society, NPLCoder, Language Technology Kendra
- All information verified as of December 16, 2024

## How to Contribute

### Types of Contributions We Need

1. **Updated Information**
   - New registration deadlines
   - Changed contact information
   - Updated olympiad schedules
   - Recent medalists and achievements

2. **Alumni Stories**
   - Personal experiences from olympiad participants
   - Preparation tips and strategies
   - University and career outcomes
   - Contact: Submit via GitHub Issues or Pull Request

3. **Resource Additions**
   - Training materials and books
   - Online courses and platforms
   - Past paper collections
   - Study group information

4. **Technical Improvements**
   - Bug fixes
   - Design enhancements
   - Mobile responsiveness improvements
   - SEO optimizations

### Contribution Guidelines

#### For Non-Technical Contributors

**Report Updates or Corrections:**
1. Go to [GitHub Issues](https://github.com/crazy-cat-crypto/nepal-olympiad-hub/issues)
2. Click "New Issue"
3. Provide:
   - What needs updating
   - Correct information with source
   - Date of verification

**Share Your Story:**
1. Email: [Create issue on GitHub with "Alumni Story" label]
2. Include:
   - Your name and olympiad(s)
   - Year(s) of participation
   - Achievements
   - Current status (university/career)
   - Preparation advice (100-200 words)
   - Photo (optional)

#### For Technical Contributors

**Setup Development Environment:**
```bash
# Clone the repository
git clone https://github.com/crazy-cat-crypto/nepal-olympiad-hub.git
cd nepal-olympiad-hub

# Open in VS Code (or your preferred editor)
code .

# Make your changes

# Test locally
# Open index.html in your browser
```

**Making Changes:**

1. **Fork the repository**
   - Click "Fork" button on GitHub

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Edit relevant files
   - Test in browser (ensure mobile responsive)
   - Maintain code style consistency

4. **Commit with clear messages**
   ```bash
   git add .
   git commit -m "Add: Brief description of changes"
   ```

5. **Push and create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```
   - Go to GitHub and click "New Pull Request"
   - Describe your changes clearly
   - Reference any related issues

### Code Style Guidelines

**HTML:**
- Use semantic HTML5 elements
- Maintain accessibility (alt text, aria labels)
- Keep structure clean and readable

**CSS:**
- Use CSS variables defined in `:root`
- Mobile-first approach
- Comment complex selectors
- Maintain dark mode compatibility

**JavaScript:**
- Use clear variable names
- Comment complex logic
- Avoid jQuery (vanilla JS only)
- Test in multiple browsers

### Data Update Process

**Updating Olympiad Information:**

1. **Edit js/main.js**
   - Find the `olympiadsData` array
   - Update relevant fields:
     ```javascript
     {
         id: 'imo',
         name: 'International Mathematical Olympiad',
         nextDeadline: 'January 2027', // UPDATE HERE
         registrationFee: 'NPR 500',   // UPDATE HERE
         // ... other fields
     }
     ```

2. **Verify Information**
   - Check official organization websites
   - Confirm with olympiad coordinators
   - Document source in commit message

3. **Update "Last Verified" Date**
   - Update footer timestamp
   - Note verification date in commit

### File Structure

```
nepal-olympiad-hub/
├── index.html              # Main homepage
├── css/
│   └── style.css          # All styles (responsive, dark mode)
├── js/
│   └── main.js            # Dynamic content, olympiad data
├── pages/                 # Individual olympiad pages (TO BE ADDED)
│   ├── mathematics.html
│   ├── physics.html
│   ├── astronomy.html
│   └── ...
├── data/                  # JSON data files (TO BE ADDED)
│   ├── olympiads.json
│   ├── alumni.json
│   └── resources.json
├── images/               # Images and assets (TO BE ADDED)
├── LICENSE               # MIT License
├── README.md            # Project documentation
└── CONTRIBUTORS.md      # This file
```

### Olympiad Organization Contacts

**Always verify information with official sources:**

- **IMO (Mathematics):** Mathematical Association of Nepal
  - Email: binod@kusoed.edu.np
  - Website: https://www.mathassociationnepal.org.np

- **IPhO (Physics):** Nepal Physical Society
  - Email: info@nps.org.np
  - Website: https://nps.org.np

- **IOAA (Astronomy):** Nepal Astronomical Society
  - Email: nasoneal@gmail.com
  - Website: https://www.nepalastronomicalsociety.org

- **NOI (Informatics):** NPLCoder
  - Email: work@nplcoder.org
  - Website: https://k12.nplcoder.org

- **HLON (Linguistics):** Language Technology Kendra
  - Website: https://hlon.org

### Testing Checklist

Before submitting a Pull Request:

- [ ] Tested in Chrome/Edge
- [ ] Tested in Firefox
- [ ] Tested on mobile device (or browser DevTools)
- [ ] Dark mode works correctly
- [ ] All links functional
- [ ] No JavaScript console errors
- [ ] HTML validates (https://validator.w3.org/)
- [ ] Accessible (screen reader compatible)
- [ ] Commit messages are clear

### Priority Tasks

If you want to contribute but aren't sure where to start:

**High Priority:**
1. Create individual olympiad pages (pages/mathematics.html, etc.)
2. Add FAQ page with common questions
3. Create alumni stories section
4. Add comprehensive resources page
5. Verify and update 2026 olympiad deadlines

**Medium Priority:**
1. Add search functionality
2. Create newsletter signup
3. Add more olympiad organizations (IBO, IChO confirmation)
4. Mobile menu improvements
5. Add more alumni profiles

**Low Priority:**
1. Animated counters for statistics
2. Interactive timeline of olympiad dates
3. Filterable resource library
4. Print-friendly styles

### Recognition

All contributors will be credited:
- In this CONTRIBUTORS.md file
- On the website (Contributors page - to be created)
- In GitHub commit history

### Questions?

For questions about contributing:
- Open a GitHub Issue with "Question" label
- Check existing issues for answers
- Review the README.md for project overview

### Code of Conduct

**Be Respectful:**
- Treat all contributors with respect
- Constructive feedback only
- Focus on the project goals

**Be Accurate:**
- Verify all information from official sources
- Cite sources when updating data
- Document verification dates

**Be Collaborative:**
- Help other contributors
- Review pull requests constructively
- Share knowledge and resources

---

## Current Contributors

### 2024
- **Initial Creator** - Project setup, research, and website development (December 2024)

*Want to be listed here? Make a contribution and you'll be added!*

---

**Thank you for helping Nepali students access international olympiad opportunities! 🇳🇵**

*Last Updated: December 16, 2024*
