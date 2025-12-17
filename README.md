# nepal-olympiad-hub
Comprehensive resource portal for Nepali students pursuing international olympiads - IMO, IPhO, IOAA, IChO, IBO, IOI, IOL. Features past papers, training resources, alumni stories, and verified contact information.

https://crazy-cat-crypto.github.io/nepal-olympiad-hub/

## Features

- 🎯 **7 International Olympiads**: IMO, IPhO, IOAA, IChO, IBO, IOI, IOL
- 📚 **Comprehensive Resources**: Curated books, websites, and practice materials
- 👥 **Alumni Network**: Success stories from Nepali olympiad participants
- 📝 **Detailed FAQs**: Answers to common questions about preparation and selection
- ✅ **Verified Information**: All contacts and dates verified as of December 2024
- 🔄 **Easy Updates**: JSON-based data structure for simple maintenance

## Quick Start

Visit [https://crazy-cat-crypto.github.io/nepal-olympiad-hub/](https://crazy-cat-crypto.github.io/nepal-olympiad-hub/) to explore:

1. **Browse Olympiads**: Click on any subject (Mathematics, Physics, etc.) in the navigation
2. **Find Resources**: Access curated study materials and past papers
3. **Read Alumni Stories**: Learn from successful participants
4. **Get FAQs**: Find answers to preparation questions

## Repository Structure

```
nepal-olympiad-hub/
├── index.html              # Homepage
├── pages/                  # Subject portal pages
│   ├── mathematics.html    # IMO information
│   ├── physics.html        # IPhO information
│   ├── astronomy.html      # IOAA information
│   ├── chemistry.html      # IChO information
│   ├── biology.html        # IBO information
│   ├── informatics.html    # IOI information
│   ├── linguistics.html    # IOL information
│   ├── alumni.html         # Alumni stories
│   └── faq.html           # FAQ page
├── data/                   # JSON data files
│   ├── olympiads.json      # Olympiad details
│   ├── alumni.json         # Alumni information
│   ├── resources.json      # Learning resources
│   └── faq.json           # FAQ data
├── css/                    # Stylesheets
└── js/                     # JavaScript files
```

## Maintenance Guide

This website uses a **data-driven architecture** where all content is stored in JSON files. This makes updates incredibly simple—just edit the JSON files and commit to GitHub!

### How to Update Content

#### 1. Update Olympiad Information (e.g., change IMO date)

**File**: `/data/olympiads.json`

**Example**: Update IMO 2026 international competition date

```json
{
  "olympiads": [
    {
      "id": "imo",
      "name": "International Mathematical Olympiad",
      "timeline": {
        "registration": "September - October",
        "international": "July 2026"  ← Change this
      },
      "lastChecked": "2025-01-15"     ← Update this too
    }
  ]
}
```

**Steps**:
1. Go to `data/olympiads.json` on GitHub
2. Click the pencil icon (Edit)
3. Find the olympiad you want to update (search for `"id": "imo"`)
4. Change the relevant field (e.g., date, contact email, website)
5. Update `lastChecked` field to current date
6. Click "Commit changes"
7. The website updates automatically!

#### 2. Add a New Resource

**File**: `/data/resources.json`

**Example**: Add a new physics book

```json
{
  "id": "physics-3",
  "title": "Fundamentals of Physics by Halliday & Resnick",
  "author": "David Halliday, Robert Resnick",
  "type": "book",
  "subject": "physics",
  "difficulty": "intermediate",
  "url": "https://www.amazon.com/...",
  "description": "Comprehensive textbook for physics olympiad preparation",
  "verified": "2025-12-17"
}
```

Add this object to the `resources` array in `resources.json`, then commit.

#### 3. Add an Alumni Profile

**File**: `/data/alumni.json`

```json
{
  "id": "alumni-5",
  "name": "Your Name",
  "olympiad": "IMO",
  "year": 2024,
  "achievement": "Bronze Medal",
  "currentStatus": "Studying at MIT",
  "advice": "Start early and practice consistently",
  "social": {
    "linkedin": "https://linkedin.com/in/yourname"
  }
}
```

#### 4. Update FAQ

**File**: `/data/faq.json`

Add a new FAQ by adding an object to the `faqs` array:

```json
{
  "id": 13,
  "category": "Preparation",
  "question": "Your new question?",
  "answer": "Your detailed answer here."
}
```

### Common Update Scenarios

#### Scenario 1: Registration dates changed
→ Edit `olympiads.json` → find the olympiad → update `timeline` section → commit

#### Scenario 2: New contact person for an organization
→ Edit `olympiads.json` → find the olympiad → update `contactEmail` → commit

#### Scenario 3: Add a new study resource
→ Edit `resources.json` → add new entry to `resources` array → commit

#### Scenario 4: Update verification date
→ Edit the relevant JSON file → change `lastChecked` or `verified` field → commit

### Important Notes

- ✅ **Always validate JSON**: Use [JSONLint](https://jsonlint.com/) to check syntax before committing
- ✅ **Update verification dates**: When you update information, change the `lastChecked` or `verified` field
- ✅ **Keep URLs current**: Verify all external links are still working
- ✅ **Follow existing patterns**: Use the same structure as existing entries

## Contributing

We welcome contributions! See [CONTRIBUTORS.md](CONTRIBUTORS.md) for guidelines.

### How to Contribute

1. Fork this repository
2. Make your changes (update JSON files or improve pages)
3. Test locally (open `index.html` in a browser)
4. Create a Pull Request with:
   - Clear description of changes
   - Why the change is needed
   - Credit request (your name will be added to CONTRIBUTORS.md)

### Contribution Ideas

- 📝 Add more resources (books, websites, videos)
- 👥 Share your olympiad journey (add to alumni.json)
- ❓ Contribute FAQs based on your experience
- 🐛 Report outdated information
- 🎨 Improve design or user experience
- 🌐 Translate content to Nepali

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Hosting**: GitHub Pages (free, automatic deployment)
- **Data**: JSON files (easy to edit, version controlled)
- **License**: MIT (open source, attribution required)

## Contact & Verification

All organization contacts are verified. For the most up-to-date information:

- **Mathematical Association of Nepal**: Visit pages/mathematics.html
- **Nepal Physical Society**: Visit pages/physics.html
- **Nepal Astronomical Society**: Visit pages/astronomy.html

Last site update: December 2024

## License

MIT License - See [LICENSE](LICENSE) for details.

All contributors must be credited. See [CONTRIBUTORS.md](CONTRIBUTORS.md).

---

**Built with ❤️ by the Nepal Olympiad Community**
