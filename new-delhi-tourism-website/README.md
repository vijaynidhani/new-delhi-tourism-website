# New Delhi Tourism Website

A static website showcasing tourist places in New Delhi, India, deployed using Docker.

## Features

- List of popular tourist attractions in New Delhi
- Detailed information for each place
- Responsive design
- Dockerized for easy deployment

## Getting Started

### Prerequisites

- Docker
- Docker Compose (optional)

### Running with Docker

```bash
docker build -t new-delhi-tourism .
docker run -p 8080:80 new-delhi-tourism
```

Or using docker-compose:

```bash
docker-compose up
```

Then visit `http://localhost:8080` in your browser.

## Project Structure

```
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── data/
│   └── places.json
└── Dockerfile
```

## Contributing

Feel free to submit issues and pull requests.

## License

MIT