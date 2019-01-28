# Planner
React component library for the school year planning functionality of the Schul-Cloud built in Typescript.

It exports four different views and two setup functions that can be used to adjust the look and feel of the views.

The library was built as part of my master's thesis. Many information about the intial user research, the concept and implementation details are documented in my [work](/misc/MasterThesis.pdf).
## Commands
- `yarn storybook` - Starts [Storybook](https://github.com/storybooks/storybook) - the UI component development environment on http://localhost:9001
- `yarn build` - Builds library and generates typings to release a new version

## Usage
- Install and add the library to your `package.json` (It is not on npm so far)
- Import views and setup functions
```javascript
import {
  ClassConfigurationView, 
  CalendarView, 
  TopicTemplateView, 
  TopicInstanceView, 
  setupCustomStyles, 
  setupComponentMap
} from 'planner';
```
### ClassConfigurationView
![Class Configuration View](/misc/class_configuration_view.png?raw=true "Class Configuration View")
### CalendarView
![Calendar View](/misc/calendar_school_year.png?raw=true "Calendar View")
### TopicTemplateView
![Topic Template View](/misc/topic_template_view.png?raw=true "Class Configuration View")
### TopicInstanceView
![Topic Instance View](/misc/topic_instance_view.png?raw=true "Topic Instance View")
### setupCustomStyles
This function allows to define custom properties for the whole library (e.g., primary color, font family).
### setupComponentMap
This function allows to pass a component map with your custom components (e.g., buttons, selects, input) better suited for the look and feel of your application.
## Storybook
The development of the component library is mainly done in Storybook. It offers an environment to look and play around with views and components.
Moreover, the types and interfaces of components are documented and it is possible to change properties of individual components to see their behavoir.

