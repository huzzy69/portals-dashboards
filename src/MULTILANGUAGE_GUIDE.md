# OptikGoal Multi-Language Implementation Guide

## Overview

OptikGoal now supports **3 languages** with full RTL (Right-to-Left) support for Arabic:

- 🇬🇧 **English (EN)** - Default, LTR
- 🇹🇷 **Turkish (TR)** - LTR with longer text support
- 🇸🇦 **Arabic (AR)** - RTL with full layout mirroring

## Language Switcher

### Desktop
- Located in the header next to the navigation
- Click the Globe icon with current language code
- Dropdown shows all available languages with flags
- Active language is highlighted in gold

### Mobile
- Language selector appears in the mobile menu
- Shows as 3 button grid with flags
- Tap to switch languages instantly

## How It Works

### 1. Language Context (`/contexts/LanguageContext.tsx`)

The system uses React Context to manage language state globally:

```tsx
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { t, language, setLanguage, isRTL } = useLanguage();
  
  return (
    <div>
      <h1>{t('home.welcome')}</h1>
      {isRTL && <p>This is RTL mode!</p>}
    </div>
  );
}
```

### 2. Translation Keys

All text uses translation keys in the format: `section.key`

Examples:
- `nav.home` → Home / Ana Sayfa / الرئيسية
- `predictions.title` → Expert Predictions / Uzman Tahminleri / توقعات الخبراء
- `vip.membership` → VIP Membership / VIP Üyelik / عضوية VIP

### 3. RTL Support for Arabic

When Arabic is selected, the entire UI automatically:

#### Layout Changes
- ✅ Text direction: `dir="rtl"` on root element
- ✅ Text alignment: right-aligned
- ✅ Navigation: moves to the right side
- ✅ Dropdowns: open from the right
- ✅ Icons: chevrons and arrows flip horizontally
- ✅ Spacing: margins and padding reverse
- ✅ Flexbox: row-reverse for icon+text combinations

#### CSS Classes
```css
/* RTL mode is applied automatically */
.rtl-mode {
  direction: rtl;
}

/* Flip icons in RTL */
.rtl-mode .flip-rtl {
  transform: scaleX(-1);
}
```

#### Example Usage in Components
```tsx
// Arrows flip for RTL
<button className={`flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
  <span>{t('home.viewAll')}</span>
  <span>{isRTL ? '←' : '→'}</span>
</button>

// Icons flip for RTL
<ChevronLeft className={isRTL ? 'flip-rtl' : ''} />

// Text alignment
<div className={isRTL ? 'text-right' : 'text-left'}>
  {t('content')}
</div>
```

## Adding New Translations

### Step 1: Add Translation Keys

Edit `/contexts/LanguageContext.tsx` and add your keys to all 3 languages:

```tsx
const translations = {
  EN: {
    'myFeature.title': 'My Feature',
    'myFeature.description': 'This is a description',
  },
  TR: {
    'myFeature.title': 'Özelliğim',
    'myFeature.description': 'Bu bir açıklamadır',
  },
  AR: {
    'myFeature.title': 'ميزتي',
    'myFeature.description': 'هذا وصف',
  },
};
```

### Step 2: Use in Components

```tsx
import { useLanguage } from '../contexts/LanguageContext';

function MyFeature() {
  const { t } = useLanguage();
  
  return (
    <div>
      <h2>{t('myFeature.title')}</h2>
      <p>{t('myFeature.description')}</p>
    </div>
  );
}
```

## Design Considerations

### Turkish Language
- ✨ Turkish text can be **20-30% longer** than English
- ✅ Buttons use `whitespace-nowrap` to prevent wrapping
- ✅ Flex layouts automatically accommodate longer text
- ✅ Grid layouts have sufficient spacing

### Arabic Language
- ✨ Arabic text can be **shorter or longer** than English
- ✅ All icons (arrows, chevrons) flip horizontally
- ✅ Numbers stay LTR (e.g., scores, odds)
- ✅ Multi-line text aligns right
- ✅ Forms and inputs align right

### Testing Checklist

When adding new features, test in all 3 languages:

- [ ] English: Default appearance
- [ ] Turkish: Check for text overflow
- [ ] Arabic: Check RTL layout, icon flipping
- [ ] Mobile: Language switcher works
- [ ] Desktop: Dropdown works
- [ ] Navigation: All links translate correctly
- [ ] Buttons: Auto-resize for longer text
- [ ] Icons: Flip correctly in RTL

## Component Examples

### Updated Components with Multi-Language Support

#### ✅ Header
- Language dropdown (desktop)
- Language grid (mobile)
- All nav items translated

#### ✅ Footer
- All sections translated
- Links maintain correct labels

#### ✅ BottomNav (Mobile)
- Icon labels translated
- Compact design works for all languages

#### ✅ Home Page
- Complete translation implementation
- RTL-aware arrows and icons
- Demonstrates all features

### Partially Updated (Need Full Implementation)

These pages need translation updates:
- LiveScores
- MatchDetails
- Predictions
- MatchBulletin
- VIPMembership
- Notifications
- Comments
- News
- NewsDetail

Follow the pattern from `Home.tsx` for implementation.

## Translation Coverage

### ✅ Fully Translated
- Navigation (Header, Footer, Bottom Nav)
- Common elements
- Home page content
- Categories
- VIP features

### 🔄 Needs Translation
- Match-specific content (team names, etc.)
- User-generated content (comments)
- News article content
- Date/time formatting

## Best Practices

### DO ✅
- Always use `t()` function for static text
- Test in all 3 languages
- Use `isRTL` for layout adjustments
- Add `whitespace-nowrap` for critical buttons
- Use flexible layouts (flex, grid)
- Flip directional icons in RTL

### DON'T ❌
- Hardcode text strings
- Use fixed widths that break in Turkish
- Forget to flip arrows/chevrons in RTL
- Use absolute positioning without RTL adjustments
- Assume text length is consistent
- Use non-flexible layouts

## Future Enhancements

### Potential Additions
- Date/time localization (moment.js, date-fns)
- Number formatting (currency, percentages)
- Pluralization rules
- Language-specific fonts
- Translation loading from API
- User language preference persistence

### Additional Languages
The system is extensible. To add new languages:
1. Add language code to type: `type Language = 'EN' | 'TR' | 'AR' | 'YOUR_LANG';`
2. Add translations object with all keys
3. Add to language selector with flag
4. Determine if RTL support is needed
5. Test thoroughly

## Technical Details

### Context API
- Single source of truth for current language
- Wraps entire app in `LanguageProvider`
- Automatic `dir` attribute on root element
- Automatic RTL CSS class application

### Performance
- Translation object is static (no API calls)
- Fast lookups with O(1) complexity
- No re-renders unless language changes
- Minimal bundle size impact

### Accessibility
- `dir="rtl"` attribute for screen readers
- Language switcher keyboard accessible
- ARIA labels could be added per language
- High contrast maintained in all languages

---

## Support

For questions about the multi-language system, refer to:
- `/contexts/LanguageContext.tsx` - Translation definitions
- `/pages/Home.tsx` - Implementation example
- `/components/Header.tsx` - Language switcher implementation

Happy translating! 🌍
