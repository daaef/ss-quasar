module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./node_modules/flowbite/**/*.{js,ts}"
    ],
    theme: {
        extend: {},
    },
    darkMode: 'media',
    plugins: [require('daisyui'), require('flowbite/plugin')],
    daisyui: {
        themes: ["light"],
        darkTheme: 'somesome'
    },
}