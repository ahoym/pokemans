/*
Theme looks like:

{
    colors: {
        success: 'hexdex',
        ...
    }
}
*/

export const typographyColors = (color, theme) => ({
  color: theme.colors[color],
});
