#React Redux frontend

My take on https://www.reaktor.com/junior-dev-assignment/

I decided to use React and Redux to do my best at emulating an actual web application. This did add quite a few libraries to my project.
However when it comes to any sort of parsing of data it is all done in javascript and only javascript. No external libraries were used in that.

Why did I decide to use a second parser instead of making one "proper" one?
The data structure would have gotten a bit too crazy in my opinion had I attempted to create for example a nested object that attempted to deal with all the pipes and version removals from the Depends fields.

Due to personal reasons I ran a bit short on time on this one. Commenting is not great and there's atleast two bugs. The app does however meet all the requirements of the given assignment.

#Known Bugs

No proper handling of invalid urls such as packages/asdafghads/. You should not however end in an invalid url by navigating the app normally.
Description fields sometimes swallow other fields such as Homepage. The parser needs to be better.