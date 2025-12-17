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

## 🔧 Maintenance & Update Guide

This website uses a **data-driven architecture** for easy updates without touching the HTML/CSS code. All olympiad information is stored in JSON files that anyone can edit.

### Why This Matters

This design makes the website:
- **Easy to maintain**: Update dates, contacts, or resources by editing simple JSON files
- **Collaborative**: Multiple people can contribute without coding knowledge
- **Version controlled**: Every change is tracked on GitHub with full history
- **Browser updatable**: No need for local development environment

### Quick Update Instructions

#### Example 1: Update IMO 2026 Date

**Scenario**: IMO 2026 announced for July 15-25 in Paris

1. Go to [`data/olympiads.json`](data/olympiads.json)
2. Click the **Edit** button (pencil icon)
3. Find the IMO entry (search for `"id": "imo"`)
4. Update the `nextEdition` section:
   ```json
   "nextEdition": {
     "year": 2026,
     "location": "Paris, France",
     "dates": "July 15-25, 2026"
   }
   ```
5. Scroll down, add a commit message: "Update IMO 2026 location and dates"
6. Click **Commit changes**
7. Done! The homepage and mathematics.html will automatically show the new information

#### Example 2: Add a New Resource

**Scenario**: You found an excellent physics problem bank

1. Go to [`data/resources.json`](data/resources.json)
2. Click the **Edit** button
3. Add a new entry in the `"resources"` array:
   ```json
   {
     "id": "physics-5",
     "title": "Physics Olympiad Problem Bank 2024",
     "type": "problems",
     "subject": "physics",
     "difficulty": "advanced",
     "url": "https://example.com/physics-problems",
     "description": "Comprehensive collection of IPhO-style problems with detailed solutions.",
     "verified": "2025-01-15"
   },
   ```
4. Commit with message: "Add physics problem bank resource"
5. The resource will appear on the Resources page with automatic filtering

#### Example 3: Update Contact Email

**Scenario**: MAN changed their contact email

1. Go to [`data/olympiads.json`](data/olympiads.json)
2. Find the IMO entry
3. Update the `contactEmail` field:
   ```json
   "contactEmail": "new.email@man.org.np"
   ```
4. Also update in [`pages/contact.html`](pages/contact.html) if email is hardcoded there
5. Commit: "Update MAN contact email"

### What Files Control What?

| File | What It Controls |
|------|------------------|
| `data/olympiads.json` | All olympiad information: dates, contacts, fees, eligibility, past papers, resources per olympiad |
| `data/resources.json` | Study resources shown on Resources page (books, websites, communities, problem banks) |
| `data/alumni.json` | Alumni stories and achievements shown on Alumni page |
| `data/faq.json` | Frequently Asked Questions with categories (Getting Started, Preparation, Selection, Opportunities, Technical) |
| `pages/*.html` | Individual pages (mathematics.html, physics.html, etc.) - update only for major content changes |
| `index.html` | Homepage - rarely needs updates (most data pulled from JSON files) |
| `css/style.css` | Website design and styling - update only for visual changes |

### Data Structure Reference

#### olympiads.json Structure

```json
{
  "olympiads": [
    {
      "id": "imo",
      "name": "International Mathematical Olympiad",
      "shortName": "IMO",
      "subject": "Mathematics",
      "description": "Brief description",
      "eligibility": "Age/education requirements",
      "selectionProcess": ["Step 1", "Step 2", "Step 3"],
      "contactOrganization": "Mathematical Association of Nepal",
      "contactPerson": "Name",
      "contactEmail": "email@domain.np",
      "website": "https://website.org",
      "registrationFee": "NPR 500",
      "timeline": {
        "registration": "Month range",
        "nationalLevel": "Month",
        "international": "Month"
      },
      "nextEdition": {
        "year": 2026,
        "location": "City, Country",
        "dates": "Month dates"
      },
      "pastPapers": [
        {"year": 2024, "link": "https://..."}
      ],
      "resources": [
        {
          "title": "Resource name",
          "type": "book|website|community|problems",
          "difficulty": "beginner|intermediate|advanced",
          "url": "https://...",
          "description": "Brief description"
        }
      ],
      "lastChecked": "2025-01-15"
    }
  ]
}
```

### Best Practices

#### When Updating Data

1. **Verify Information**: Always double-check dates, emails, and links before updating
2. **Use Clear Commit Messages**: "Update IMO 2026 dates" not "fix stuff"
3. **Test Links**: Click every URL you add to ensure it works
4. **Keep Verified Dates Current**: Update `lastChecked` field when verifying information
5. **Preserve JSON Format**: Be careful with commas, quotes, and brackets

#### JSON Editing Tips

- **Commas**: Every item in an array/object needs a comma EXCEPT the last one
- **Quotes**: Use double quotes `"` not single quotes `'`
- **Test Your JSON**: Use [JSONLint](https://jsonlint.com/) to validate before committing
- **Copy Existing Entries**: When adding new items, copy an existing entry and modify it

### Troubleshooting

**Problem**: Website not showing my updates
- **Solution 1**: Wait 2-3 minutes for GitHub Pages to rebuild
- **Solution 2**: Hard refresh your browser (Ctrl+Shift+R / Cmd+Shift+R)
- **Solution 3**: Check if your JSON has syntax errors (use JSONLint)

**Problem**: Broken JSON (site stops working)
- **Solution**: Go to the file's History, find your commit, click "Revert"

**Problem**: Don't know how to edit JSON
- **Solution 1**: Ask in GitHub Issues with `question` label
- **Solution 2**: Look at existing entries as examples
- **Solution 3**: Use a JSON editor online to practice

### Who Can Update?

- **Anyone**: Can suggest changes via GitHub Issues
- **Contributors**: Can submit Pull Requests with changes
- **Maintainers**: Can directly edit files (repository access required)
- **Olympiad Organizations**: Can request direct edit access by contacting maintainers

### Requesting Updates

If you don't have edit access:

1. Go to [Issues](https://github.com/crazy-cat-crypto/nepal-olympiad-hub/issues/new)
2. Click **New Issue**
3. Title: "Update Request: [What needs updating]"
4. Body: Explain the change needed with sources/verification
5. Maintainers will review and apply the update

### Regular Maintenance Checklist

**Monthly**:
- [ ] Verify all olympiad registration deadlines
- [ ] Check if any competition dates changed
- [ ] Test all external links (resources, official sites)
- [ ] Update `lastChecked` dates in olympiads.json

**After Each Competition**:
- [ ] Update Nepal's performance data (medals, participants)
- [ ] Add new alumni profiles (with permission)
- [ ] Update FAQ if common new questions emerged
- [ ] Check if organization contacts changed

**Annually** (January):
- [ ] Update all `nextEdition` years
- [ ] Verify all organization contact information
- [ ] Review and update resource links
- [ ] Update "Last site update" date in Contact page

---


**Built with ❤️ by the Nepal Olympiad Community**
