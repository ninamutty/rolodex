# Rolodex
Create a single-page application using Backbone.js that will track contact information for you about your friends!

## Learning Goals
- Introduction to Backbone
- Using an MVC Framework with JS
- Continue utilizing jQuery, HTML & CSS knowledge
- Create a responsive, dynamic look & feel

## Overall Requirements
Your application shall be a single-page application that has interactive features. It will use a local storage component, and not connect to a "real" database.

Each contact should consist of:
- Name
- E-mail address
- Phone Number

### Wave 1
- Create a single Backbone **Model** object, Contact, using static data
- Utilize this Model to show a single contact card on the contact list
  - This contact card shall show the name only and no details

### Wave 2
- Add the functionality to create a **new** Contact object (we will not longer use static data)
- Update the contact list to show all contact cards using a **Collection**

### Wave 3
- Add the functionality that will show the Contact **details**. You should be able to:
  - Click the contact card from the contact list to see all Contact fields in a modal
  - Close the contact card by clicking a "close" button or when the details modal loses focus

#### Optional Requirements
- Add the functionality that will allow you to **edit** the Contact
  - This should be triggered from the contact details modal, using an edit button or some other edit method
  - When a Contact is updated, the contact list should be updated, if necessary

## Project Scaffold
You have been provided with an application that has some of the structure that you will need to get started. Note that Backbone is much less structured than our Rails applications, so we are providing some of this structure for you. You would not normally have this structure when starting a new Backbone application.

Your folder structure is set up with the majority of the files that you will need to edit in the `src` folder. Each folder inside of `src` contains files that will get you started.

`collections` folder: 
- `rolodex.js`: will contain the code to represent a collection of Contacts

`models` folder:
- `application.js`: This model represents the overall application
- `contact.js`: This model represents a single contact

`views` folder:
- `application_view.js`: This view handles logic for the overall application
- `contact_view.js`: This view handles logic for a single contact
- `rolodex_view.js`: This view handles logic for the rolodex collection
