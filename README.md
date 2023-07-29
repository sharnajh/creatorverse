# WEB103 Prework - *Creatorverse*

Submitted by: **Sharna Jahan Hossain**

About this web app: **👉🏿 app description here**

Time spent: **👉🏿 X** hours (started 6/6)

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- ✅ **A logical component structure in React is used to create the frontend of the app**
- ✅ **At least five content creators are displayed on the homepage of the app**
- ✅ **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- ✅ **API calls use the async/await design pattern via Axios or fetch()**
- ✅ **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- ✅ **Each content creator has their own unique URL**
- ✅ **The user can edit a content creator to change their name, url, or description**
- ✅ **The user can delete a content creator**
- ✅ **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- ✅ Picocss is used to style HTML elements
- ✅ The content creator items are displayed in a creative format, like cards instead of a list
- ✅ An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* ✅ Light and Dark Themes utilizing Pico.css variables, managed with React state.
* ✅ Form validation with UI feedback to ensure that only valid data is submitted to the database
* ✅ Responsive Web Design. Because I opted for a fixed Navbar at the top, I used React hook useRef() to calculate the height of the Navbar (which varies due to it's responsivity from Pico.css) in order to offset the rest of the body to be visible directly beneath the Nav. 
* ✅ Refresh creators every render of homepage to fetch most recent changes. According to the instructions, the initial fetch to View All Content Creators should happen in App.js, which only renders once per refresh. In order to fetch new data in real-time, I have a component slightly further down the component tree refresh the data. 
* ✅ Used React's ContextAPI to manage the data fetched from Supabase and make it available across the app. This helps foster a cleaner flow of data throughout the component tree structure, and avoids unnecessary rerenders from redundant API calls. 

## Video Walkthrough

Here's a walkthrough of implemented required features:

👉🏿<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  👉🏿 GIF tool here
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app or any additional context you'd like to add.

## License

Copyright 2023 Sharna Hossain

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
