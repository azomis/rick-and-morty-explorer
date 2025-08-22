# Rick and Morty Explorer 🧪🚀

A modern, responsive web application built with Next.js that allows users to explore the Rick and Morty universe through an interactive interface. Browse characters, locations, and episodes with search functionality and pagination.

## 🌟 Features

- **Character Explorer**: Browse and search through all Rick and Morty characters
- **Location Database**: Explore different dimensions and planets
- **Episode Guide**: Complete episode information with details
- **Advanced Search**: Search functionality with query persistence
- **Responsive Design**: Mobile-first approach with Rick and Morty themed UI
- **Smart Pagination**: Preserves search parameters across page navigation
- **Interactive UI**: Hover effects and animations inspired by the show

## 🚀 Installation & Setup

### Prerequisites

- Node.js 18+ (recommended: 20+)
- npm, yarn, or pnpm

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/AzOmisa/rick-and-morty-explorer.git
   cd rick-and-morty-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## 🏗️ Project Architecture & Design Process

### Design Philosophy

The project follows a **Feature-Sliced Design (FSD)** architecture pattern, organizing code by business logic rather than technical layers. This approach enhances maintainability and scalability.

```
src/
├── app/                 # Next.js App Router
├── entities/           # Business entities (character, episode, location)
├── shared/             # Shared utilities, components, and configs
```

### Development Process

1. **Planning Phase**: Analyzed Rick and Morty API structure and designed component hierarchy
2. **Core Setup**: Configured Next.js 15 with App Router, TypeScript, and Tailwind CSS
3. **Entity Layer**: Built data fetching logic and type definitions for characters, episodes, and locations
4. **UI Development**: Created responsive components with Rick and Morty themed styling
5. **Feature Integration**: Implemented search, pagination, and routing functionality
6. **Quality Assurance**: Added ESLint, Prettier, and Husky for code quality

### Component Architecture

- **Atomic Design**: Components built from simple to complex (atoms → molecules → organisms)
- **Server Components**: Leveraged Next.js 15 Server Components for optimal performance
- **Client Hydration**: Strategic use of `'use client'` directive for interactive features
- **Responsive First**: Mobile-first approach with Tailwind CSS breakpoints

## 🔧 Unique Approaches & Methodologies

### 1. **Hybrid Rendering Strategy**
- **Server Components** for data fetching and SEO optimization
- **Client Components** only where interactivity is required (pagination, mobile navigation)

### 2. **Form-Based Search with URL Parameters**
```typescript
// Search triggered by form submission, not on every keystroke
export default async function SearchTypePage({
  params, searchParams
}: {
  params: Promise<{ type?: RequestType }>;
  searchParams: Promise<{ name?: string; page?: string }>;
}) {
  const { type = 'character' } = await params;
  const { name, page = '1' } = await searchParams;
  
  // Data fetching only happens after form submission
  const data = await getCharacters(name, page);
  return <SearchPage data={data} />;
}
```

### 3. **Dynamic Routing with Type Safety**
```typescript
// Single component handles multiple entity types
switch (type) {
  case 'character': {
    const character = await getCharacter(id);
    return <CharacterDetails character={character} />;
  }
  case 'location': {
    const location = await getLocation(id);
    return <LocationDetails location={location} />;
  }
  case 'episode': {
    const episode = await getEpisode(id);
    return <EpisodeDetails episode={episode} />;
  }
}
```

### 4. **Smart Query Parameter Management**
- Clean URLs by removing default parameters (page=1)
- Preserved search parameters across navigation
- Form-based search instead of real-time filtering

## 🤝 Development Compromises & Trade-offs

### Performance vs. Aesthetics
- **Compromise**: Added animated background elements despite slight performance cost
- **Reasoning**: Enhanced user engagement outweighed minimal performance impact
- **Mitigation**: Used CSS transforms and `pointer-events: none` for smooth animations

### Mobile Navigation
- **Compromise**: Hamburger menu instead of always-visible navigation on mobile
- **Reasoning**: Limited screen real estate required collapsible navigation
- **Implementation**: Smooth CSS transitions with proper accessibility labels

### Search Implementation
- **Compromise**: Form-based search instead of real-time search
- **Reasoning**: Better API performance and reduced server load
- **Trade-off**: Users need to submit form instead of seeing instant results
- **Benefit**: More intentional searching and cleaner URL management

### Data Fetching
- **Compromise**: Native Fetch API instead of specialized HTTP library
- **Reasoning**: Reduced bundle size and sufficient for simple API interactions
- **Trade-off**: Manual error handling and no built-in request interceptors
- **Benefit**: Zero additional dependencies and smaller bundle size

## 🐛 Known Issues & Limitations

### Current Issues

1. **Mobile Window Size Detection**
   - **Issue**: `typeof window !== 'undefined'` check may cause hydration mismatches
   - **Impact**: Minimal - affects pagination display count
   - **Workaround**: Uses responsive CSS classes as fallback

2. **Form-Based Search Flow**
   - **Issue**: No real-time search feedback as users type
   - **Impact**: Less immediate user experience compared to instant search
   - **Reasoning**: Intentional design choice for better API performance
   - **Workaround**: Clear form submission flow with proper loading states

3. **Error Boundaries**
   - **Issue**: Limited error handling for API failures
   - **Impact**: Users may see blank pages on network issues
   - **Mitigation**: Basic try-catch blocks in server components

### Browser Compatibility

- **Modern Browsers**: Fully supported (Chrome 88+, Firefox 85+, Safari 14+)
- **Internet Explorer**: Not supported (uses modern ES6+ features)
- **Mobile Browsers**: Optimized for iOS Safari and Android Chrome

## 🛠️ Technology Stack Rationale

### Core Framework: **Next.js 15**
- **Why**: Latest features including App Router, Server Components, and improved performance
- **Benefits**: Built-in SEO optimization, automatic code splitting, and excellent developer experience
- **Alternative Considered**: Vite + React Router (rejected for SSR requirements)

### Styling: **Tailwind CSS 4.1**
- **Why**: Rapid prototyping, consistent design system, and excellent mobile-first approach
- **Benefits**: Small bundle size with purging, responsive design utilities
- **Alternative Considered**: Styled Components (rejected for performance and bundle size)

### HTTP Client: **Native Fetch API**
- **Why**: Modern browsers' built-in HTTP client, zero additional dependencies
- **Benefits**: Smaller bundle size, native Promise support, and built into the platform
- **Alternative Considered**: Axios (rejected for bundle size and over-engineering for simple API calls)

### Development Tools
- **TypeScript 5**: Type safety and better developer experience
- **ESLint + Prettier**: Code consistency and formatting
- **Husky**: Git hooks for code quality enforcement
- **lint-staged**: Only lint changed files for faster commits

### Icon Library: **Lucide React**
- **Why**: Modern, consistent icon set with React optimization
- **Benefits**: Tree-shakeable, customizable, and lightweight
- **Alternative Considered**: React Icons (rejected for bundle size)

## 📱 Responsive Design Strategy

- **Mobile First**: Base styles target mobile devices (320px+)
- **Breakpoints**: 
  - `sm`: 640px (tablets)
  - `md`: 768px (small laptops)
  - `lg`: 1024px (desktops)
- **Flexible Components**: All components adapt to screen size
- **Touch Optimization**: Larger touch targets on mobile devices

## 🚀 Future Enhancements

- [ ] Add character favorites functionality
- [ ] Implement advanced filtering options
- [ ] Add episode watch tracking
- [ ] Integrate with external APIs for additional content
- [ ] Add dark/light theme toggle
- [ ] Implement Progressive Web App features

## 📄 License

This project is for educational purposes and uses the public Rick and Morty API.

---

**Built with ❤️ and lots of ⚡ by AzOmisa**

*"Wubba Lubba Dub Dub!"* - Rick Sanchez