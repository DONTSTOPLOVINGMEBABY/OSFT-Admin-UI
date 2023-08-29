# OSFT Admin Application

## What is OSFT?

OSFT stands for 'Open Source Feature Toggles'. It is a small feature flagging service that allows developers to register and run highly performant feature toggles on their Javascript and React applications (for free!). Below is an example of an OSFT client running on a React YouTube Clone I built.   

<div align="center">
  <img src="https://hjacobs-rest-api-production.up.railway.app/osft/720-gif" alt="osft-demo"/>
</div>


#### Built With

<table>
  <tr>
    <td align="center" height="108" width="175">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
          width="48"
          height="48"
          alt="React"
        />
        <br /><strong>React</strong>
      </td>
     <td align="center" height="108" width="175">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
          width="48"
          height="48"
          alt="Javascript"
        />
        <br /><strong>Javascript</strong>
      </td>
      <td align="center" height="108" width="175">
        <img
          src="https://hjacobs-rest-api-production.up.railway.app/svgs/styled-components"
          width="48"
          height="48"
          alt="Styled Components"
        />
        <br /><strong>Styled Components</strong>
      </td>
      <td align="center" height="108" width="175">
        <img
          src="https://hjacobs-rest-api-production.up.railway.app/svgs/react-query"
          width="48"
          height="48"
          alt="React Query"
        />
        <br /><strong>React Query</strong>
      </td>
    </tr>
</table>

#### Other Repositories that are part of OSFT

[JS-Client](https://github.com/DONTSTOPLOVINGMEBABY/Feature-Flagging-Client-API)
<br/>
[React SDK](https://github.com/DONTSTOPLOVINGMEBABY/Feature-Toggles-React-SDK)
<br/>
[OSFT-Web-App](https://github.com/DONTSTOPLOVINGMEBABY/OSFT-Web-Application)
<br/>

## What is the logical structure of OSFT? 

Data is broken up into three main categories when working with OSFT: <strong>Projects</strong>, <strong>Features</strong>, and <strong>Variables</strong>.

#### Projects

This is what houses all features and toggles that you will be using for a particular project, repo, site, etc. Whenever you create a project, two API keys for this project will automatically be generated for you: a development key and a production key. This allows you to set up respective environments for production and development in your application (more information about how to use these keys can be found at the [OSFT JS Client Repo](https://github.com/DONTSTOPLOVINGMEBABY/Feature-Flagging-Client-API) or the [OSFT React SDK Repo](https://github.com/DONTSTOPLOVINGMEBABY/Feature-Toggles-React-SDK)).


#### Features

Features are 'one level below' projects and they can house one or more variables. OSFT gives you the ability to turn entire feature sets on or off, making them useful for turning on/off entire parts of your application as well as logically grouping variables together. If a feature is disabled, then all of the variables in that feature are disabled too (even if some of the varaibles are still enabled). 


#### Variables

Variables are the smallest amount of control you can have in your application. They allow you to target small things such as different styling for buttons or enabling/disabling a small feature like a gif. In order for a variable to be activated, its parent feature and the variable itself must be enabled for that particular environment. 
