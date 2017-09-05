## System Design
In this section we'll talk about the questions which require the interviewee to design a high-level architecture for some sort of a software system. This can be a web facing service, a Restful api, a peer-to-peer desktop app, and so on. The exact type of a question will most likely vary depending on the specifics of the company you interview at.

Some example:
We can give a few examples of such questions:
- Design a URL shortening services like bit.ly.
- How would you implement the google search?
- Design a client-server application which allows people to play chess with one another
- How would you store the relations in a social network like Facebook and implement a feature where one user receives notifications when their friends like the same things as they do?

The idea of these questions is to have a discussion about the problem at hand. What's important for the interviewer is the process, which you use to tackle the problem. The typical outcome of such a discussionis a high-level architecture addressing the goals and constraints in the question. Perhaps the interviewer will choose one or more areas where they will want to discuss bottlenecks and other common problems.

Over time, we've identified two major challenges most candidates face when it comes to system design questions. Candidates either:
- Approach questions in a chaotic way and get ratholed, or
- Lack solid understanding of how to properly design architectures that scale.

Fixing these two problems is going to be our focus throughout this course.
The System Design process
First things first: we'll kick off by replacing chaos with a structured approach to system design. The system design process described in the next section takes care of that, as it describes all the steps you need to follow from hearing the problem to declaring it solved.

The system Design process is the equivalent of the ALgorithm Design Canvas in the domain of system design questions.

### Designing Scalable Architectures
With the right process in place, we'll move on to destroying the second obstacle to your dream job. We'll spend a significant amount of time on building up your knowledge and intuition around desigining scalable architectures.
Scalability is the 4th step of the system design process. We are spending a disproprtionate amount of time on it simply because this is where candicates struggle the most.

### Step1: Constraints and use cases
Just like algorithm design, system design questions will also most likely be weakly defined. Consider the question about the URL-shortening service ("Design a URL shortening service like bit.ly"). There are so many things that are unclear about it! Withiout knowing more, it will be impossible to design an appropriate solution. Acutally, many candidates forget aobut this and start designing a solution immediately.

Don't make this mistake
The very first thing you should do with any system design question is to clarify the system's constraints and to identify what use cases the system needs to satisfy. Spend a few minutes questioning your interviewer and agreeing on hte scope of the system. Many of hte smae rules we discussed while talking about algorithm design apply here as well.

For example, the URL-shortening service could be meant to serve jsut a few thousand users, bugt each could be sharing millions of URLs. It could be meant to handle millions of clicks on the shortened URLs, or dozens. The services may have to provide extensive statics about each shortened URL (which will increase your data size), or mstatisitcs may not be a requirement at all.

Note: It has been pointed out to us that it is not very clear how the author gets to the 1 bln requests per month number. Here is a short explanation. The auther was considering the average time span of a URL (1-2 weeks, let's take the average ~ 10 days). Then he assumed 1 click per day. This makes 100 mln * 10 days * 1 click per day = 1 bln.

The important thing here is that these calculations are based largely on many assumptions and gut feeling. They may be incofrect.
