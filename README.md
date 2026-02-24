# Thunderbird OpenProject Extension

A Thunderbird extension that allows you to create OpenProject tasks directly from your emails.

![Thunderbird OpenProject Banner](docs/images/banner.png)

## Features

- **Create tasks from emails**: Convert any email into an OpenProject task with a single click
- **Create tasks while composing**: Add tasks from the compose window
- **Multi-language support**: Available in 16 languages
- **Customizable task format**: Define how task subjects are generated from email metadata
- **Project management**: Select project, assignee, responsible, priority, and category
- **Time tracking**: Set estimated work and remaining work for tasks
- **Date management**: Set start and end dates for tasks
- **Email body inclusion**: Optionally include the email body in the task description

## Screenshots

### Task Creation Panel
![Task Panel](docs/images/task-panel.png)
*The main task creation panel accessed from an email*

### Compose Window Panel
![Compose Panel](docs/images/compose-panel.png)
*Task creation from the compose window*

### Settings Page
![Settings](docs/images/settings.png)
*Configuration page for API credentials and defaults*

## Installation

### From Thunderbird Add-ons
*Coming soon to Thunderbird Add-ons marketplace*

### From Source
1. Download or clone this repository
2. Zip the `thunderbird-openproject` directory contents
3. In Thunderbird, go to **Add-ons and Themes** → **Gear icon** → **Install Add-on From File**
4. Select the zip file

## Configuration

### Prerequisites
- OpenProject instance with API access
- API Key from your OpenProject account

### Getting Your API Key
1. Log in to your OpenProject instance
2. Go to **Account Settings** → **API Access Token**
3. Generate or copy your API key

### Setting Up the Extension
1. Open Thunderbird and click the OpenProject button in any email
2. The settings page will open automatically on first use
3. Enter your OpenProject API URL (e.g., `https://your-company.openproject.com`)
4. Enter your API Key
5. Click **Save Token** to validate and load your projects

## Usage

### Creating a Task from an Email
1. Open an email in Thunderbird
2. Click the OpenProject icon in the message toolbar
3. The task subject will be auto-filled based on the email
4. Select a project (required)
5. Optionally set assignee, responsible, priority, category
6. Set start/end dates and work estimates
7. Check "Copy email" to include the email body in the description
8. Click **Add Task**

### Creating a Task While Composing
1. While composing an email, click the OpenProject icon in the toolbar
2. Fill in the task details
3. Click **Add Task**

## Supported Languages

| Language | Code | Native Name |
|----------|------|-------------|
| English | en | English |
| Chinese | zh | 中文 |
| Spanish | es | Español |
| Hindi | hi | हिन्दी |
| Arabic | ar | العربية |
| Portuguese | pt | Português |
| Bengali | bn | বাংলা |
| Russian | ru | Русский |
| Japanese | ja | 日本語 |
| French | fr | Français |
| German | de | Deutsch |
| Italian | it | Italiano |
| Korean | ko | 한국어 |
| Dutch | nl | Nederlands |
| Polish | pl | Polski |
| Swedish | sv | Svenska |

## Task Format Parameters

You can customize the default task subject format using these parameters:

| Parameter | Description |
|-----------|-------------|
| `%author%` | Email sender |
| `%subject%` | Email subject |
| `%msgid%` | Message ID |
| `%date-Y%` | Year (4 digits) |
| `%date-M%` | Month (1-12) |
| `%date-D%` | Day (1-31) |
| `%date-h%` | Hour (0-23) |
| `%date-m%` | Minute (0-59) |
| `%date-s%` | Second (0-59) |
| `%date-YYYY%` | Year (4 digits, zero-padded) |
| `%date-MM%` | Month (01-12, zero-padded) |
| `%date-DD%` | Day (01-31, zero-padded) |
| `%date-hh%` | Hour (00-23, zero-padded) |
| `%date-mm%` | Minute (00-59, zero-padded) |
| `%date-ss%` | Second (00-59, zero-padded) |

**Default format:** `Mail by %author%: %subject%`

## OpenProject API Requirements

This extension requires the following OpenProject API endpoints:
- `GET /api/v3/projects` - List projects
- `GET /api/v3/users` - List users
- `GET /api/v3/types` - List work package types
- `GET /api/v3/priorities` - List priorities
- `GET /api/v3/projects/{id}/categories` - List project categories
- `POST /api/v3/work_packages` - Create work package

## Compatibility

- **Thunderbird**: Version 68.0 to 150.*
- **OpenProject**: Version 12.0+ (API v3)

## Development

### Project Structure
```
thunderbird-openproject/
├── manifest.json          # Extension manifest
├── popup.css              # Styles for popup and settings
├── popup_message.html     # Task panel for emails
├── popup_compose.html     # Task panel for compose
├── settings.html          # Settings page
├── images/                # Extension icons
│   ├── icon.png
│   ├── icon_32.png
│   ├── icon_16.png
│   └── openproject-icon.png
└── scripts/
    ├── i18n.js            # Internationalization
    ├── common.js          # Shared functions
    ├── api_utils.js       # OpenProject API calls
    ├── settings_utils.js  # Settings helpers
    ├── settings.js        # Settings page logic
    ├── popup_message.js   # Email popup logic
    └── popup_compose.js   # Compose popup logic
```

### Building
No build process required. The extension can be loaded directly as an unpacked extension for development.

### Testing
1. Open Thunderbird
2. Go to **Add-ons and Themes**
3. Click the gear icon → **Debug Add-ons**
4. Click **Load Temporary Add-on**
5. Select the `thunderbird-openproject` folder

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Guidelines
1. Follow the existing code style
2. Add translations for any new UI strings
3. Test with multiple Thunderbird versions
4. Update documentation as needed

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Gabriel Lucas based on the work of Rui Pedro Henriques**

## Acknowledgments

- OpenProject team for their excellent project management software
- Thunderbird team for the extensible email client
- All contributors and translators

## Support

If you encounter any issues or have feature requests, please [open an issue](https://github.com/your-repo/thunderbird-openproject/issues) on GitHub.

---

**Note:** This extension is not officially affiliated with OpenProject or Thunderbird.
