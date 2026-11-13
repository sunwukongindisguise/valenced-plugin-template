/// <reference types="@valenced/themes-api" />

export default definePlugin({
    preInit({ themes }) {
        const group = themes.registerGroup({
            id: 'custom.navy-ocean',
            name: 'Navy Ocean',
            description: 'Deep navy blue (#090979) with bright blue accents (#0389CD).',
        })

        themes.registerTheme({
            id: 'navy-ocean-blue',
            group,
            name: 'Navy Ocean',
            description: 'Navy blue background with blue-accented icons and buttons.',
            authors: [{ name: 'Custom' }],
            getColors: () => ({
                // Main Navy Backgrounds (#090979 & darker/lighter depth shades)
                BG_BASE_PRIMARY: '#090979',
                BG_BASE_SECONDARY: '#060659',
                BG_BASE_TERTIARY: '#040442',
                BG_SURFACE_RAISED: '#0d0d94',
                BG_SURFACE_OVERLAY: '#0d0d94',
                BACKGROUND_BASE_PRIMARY: '#090979',
                BACKGROUND_BASE_SECONDARY: '#060659',
                BACKGROUND_BASE_TERTIARY: '#040442',
                BACKGROUND_BASE_LOW: '#090979',
                BACKGROUND_BASE_LOWER: '#060659',
                BACKGROUND_BASE_LOWEST: '#040442',
                BACKGROUND_SURFACE_HIGH: '#0d0d94',
                BACKGROUND_SURFACE_HIGHER: '#1111ab',
                BACKGROUND_SURFACE_HIGHEST: '#1515bf',
                BACKGROUND_PRIMARY: '#090979',
                BACKGROUND_SECONDARY: '#060659',
                BACKGROUND_SECONDARY_ALT: '#040442',
                BACKGROUND_TERTIARY: '#040442',
                BACKGROUND_FLOATING: '#0d0d94',
                BACKGROUND_MOBILE_PRIMARY: '#090979',
                BACKGROUND_MOBILE_SECONDARY: '#060659',
                BACKGROUND_NESTED_FLOATING: '#0d0d94',
                CHAT_BACKGROUND: '#090979',
                KEYBOARD: '#060659',

                // Settings Cards & Containers
                CARD_BACKGROUND_DEFAULT: '#060659',
                CARD_PRIMARY_BG: '#060659',
                CARD_PRIMARY_PRESSED_BG: '#0389CD40',
                CARD_SECONDARY_BG: '#0d0d94',
                CARD_SECONDARY_PRESSED_BG: '#0389CD40',

                // Circled Icon Buttons & "See all" Pill (#0389CD)
                BACKGROUND_ACCENT: '#0389CD',
                REDESIGN_BUTTON_SECONDARY_BACKGROUND: '#0389CD38',
                REDESIGN_BUTTON_SECONDARY_PRESSED_BACKGROUND: '#0389CD66',
                REDESIGN_BUTTON_SECONDARY_ALT_BACKGROUND: '#0389CD38',
                REDESIGN_BUTTON_SECONDARY_BORDER: '#0389CD',
                BG_MOD_FAINT: '#0389CD25',
                BG_MOD_SUBTLE: '#0389CD40',
                BG_MOD_STRONG: '#0389CD',
                BACKGROUND_MOD_FAINT: '#0389CD25',
                BACKGROUND_MOD_SUBTLE: '#0389CD40',
                BACKGROUND_MOD_NORMAL: '#0389CD55',
                BACKGROUND_MOD_STRONG: '#0389CD',
                BACKGROUND_MESSAGE_HOVER: '#0389CD25',
                BACKGROUND_MODIFIER_HOVER: '#0389CD30',
                BACKGROUND_MODIFIER_SELECTED: '#0389CD50',
                BACKGROUND_MODIFIER_ACCENT: '#0389CD',
                ANDROID_RIPPLE: '#0389CD60',

                // Icons, Links & Text
                INTERACTIVE_NORMAL: '#0389CD',
                INTERACTIVE_HOVER: '#38B6FF',
                INTERACTIVE_ACTIVE: '#FFFFFF',
                INTERACTIVE_MUTED: '#4A6FA5',
                CHANNEL_ICON: '#0389CD',
                CHANNELS_DEFAULT: '#9AC9FF',
                TEXT_NORMAL: '#E8F1FF',
                TEXT_MUTED: '#8BB4E8',
                TEXT_LINK: '#38B6FF',
                HEADER_PRIMARY: '#FFFFFF',
                HEADER_SECONDARY: '#9AC9FF',

                // Chat Box & Borders
                CHANNELTEXTAREA_BACKGROUND: '#060659',
                SPOILER_HIDDEN_BACKGROUND: '#040442',
                BORDER_FAINT: '#0389CD40',
                BORDER_SUBTLE: '#0389CD60',
                BORDER_STRONG: '#0389CD',

                // Raw Color Fallbacks
                BRAND_260: '#7CCEFF',
                BRAND_360: '#0389CD',
                BRAND_500: '#0389CD',
                BRAND_560: '#026AA0',
                NEUTRAL_60: '#1111ab',
                NEUTRAL_65: '#0d0d94',
                NEUTRAL_70: '#060659',
                NEUTRAL_75: '#060659',
                NEUTRAL_80: '#090979',
                NEUTRAL_85: '#060659',
                NEUTRAL_90: '#040442',
                PLUM_15: '#0d0d94',
                PLUM_16: '#090979',
                PLUM_17: '#060659',
                PLUM_18: '#060659',
                PLUM_20: '#060659',
                PLUM_22: '#090979',
                PLUM_24: '#040442',
            }),
        })
    },
})
