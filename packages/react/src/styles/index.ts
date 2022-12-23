import { createStitches, defaultThemeMap } from '@stitches/react';
import { colors, fonts, fontSizes, fontWeights, lineHeights, radii, spacing } from '@josafa/tokens';

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    themeMap: {
        ...defaultThemeMap,
        height: 'spacing',
        width: 'spacing',
        padding: 'spacing',
        margin: 'spacing',
    },
    theme: {
        colors: colors,
        spacing: spacing,
        fonts: fonts,
        fontSizes: fontSizes,
        fontWeights: fontWeights,
        lineHeights: lineHeights,
        radii: radii,
    },
});