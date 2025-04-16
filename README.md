# AfricaSocial

A comprehensive social media management platform that unifies your social media presence across multiple platforms.

## Features

- 🔥 **Dashboard Global**: Overview of all social networks
- 🗓️ **Calendrier Editorial**: Drag-and-drop calendar for content planning
- 📆 **Planificateur de publications**: Schedule posts across multiple platforms
- 📊 **Analytics**: Platform-specific statistics and insights
- 📥 **Social Inbox Unifiée**: Centralized message management
- 👥 **Collaboration Équipe**: Team task management
- 🗂️ **Media Library**: Content asset management
- 🔔 **Notifications**: Real-time alerts
- 🤖 **AgentIA**: AI-powered content suggestions and automation

## Tech Stack

- Frontend: React Native (Expo) + NativeWind (TailwindCSS)
- Backend: Firebase Functions + Firestore
- Authentication: Firebase Auth + OAuth
- AI Integration: OpenAI API
- Social Media APIs: Facebook, Instagram, WhatsApp, YouTube, TikTok, LinkedIn

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- Firebase account
- Social media platform developer accounts

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/africasocial.git
cd africasocial
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with your environment variables:
```
EXPO_PUBLIC_FIREBASE_API_KEY=your_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
EXPO_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
EXPO_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── screens/        # Screen components
├── navigation/     # Navigation configuration
├── services/       # API and service integrations
├── utils/          # Helper functions
├── hooks/          # Custom React hooks
├── store/          # State management
├── types/          # TypeScript type definitions
├── constants/      # App constants
├── assets/         # Images, fonts, etc.
└── config/         # Configuration files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@africasocial.com or join our Slack channel. 