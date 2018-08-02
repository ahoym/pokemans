/*
Theme looks like:

{
    colors: {
        primary: 'hexdec',
        success: 'hexdec',
        ...
    }
}
*/

export const typographyColors = (color, theme) => ({
  color: theme.colors[color],
});
