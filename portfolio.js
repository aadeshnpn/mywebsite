import emoji from "react-easy-emoji";

export const greetings = {
	name: "Aadesh Neupane",
	title: "Namaste, I'm Aadesh",
	description:
		"I'm passionate Machine Learning Engineer with an extensive experience in designing scalable Robotics Vision, Computer Vision, and NLP systems. I am looking for a full-time engineering role in autonomous vehicle industry.",
	resumeLink:
		"https://drive.google.com/file/d/1YLJy5Nm0_2ZbqVWbSIAapu8ugB4_q_hF/view?usp=sharing",
};

export const openSource = {
	githubUserName: "aadeshnpn",
};

export const contact = {};

export const socialLinks = {
	twitter: "https://twitter.com/aadeshnpn",
	github: "https://github.com/aadeshnpn",
	linkedin: "https://www.linkedin.com/in/aadeshnpn/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"MACHINE LEARNING ENGINEER WHO WANTS TO DESIGN RELIABLE AND SAFE AUTONOMOUS VEHICLES.",
	data: [
		{
			title: "Machine Learning",
			lottieAnimationFile: "/lottie/skills/96480-ai-chip-animation.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
				 	"⚡ Experienced in building massive computer vision and NLP datasets using web scraping and courd sourcing tools."
				 ),
				emoji("⚡ Proficient in performing visual anaysis of data using Pandas and Matplotlib."),
				emoji(
					"⚡ Seasoned in ML models ranging from classical pattern regonition algorithms to state-of-the-art deep learning models."
				),
				emoji(
					"⚡ Trained in MLOps principles cycle especially focused on model deployment, tracking, and monitoring."
				),
			],
			softwareSkills: [
				{
					skillName: "Cpp",
					fontAwesomeClassname: "vscode-icons:file-type-cpp",
				},
				{
					skillName: "opencv",
					fontAwesomeClassname: "logos:opencv",
				},
				{
					skillName: "SciPy",
					fontAwesomeClassname: "simple-icons:scipy",
				},
				{
					skillName: "Numpy",
					fontAwesomeClassname: "logos:numpy",
				},
				{
					skillName: "PyTorch",
					fontAwesomeClassname: "logos:pytorch",
				},
				{
					skillName: "TensorFlow",
					fontAwesomeClassname: "logos:tensorflow",
				},
				{
					skillName: "Keras",
					fontAwesomeClassname: "cib:keras",
				},
				{
					skillName: "Pandas",
					fontAwesomeClassname: "simple-icons:pandas",
				},
				// {
				// 	skillName: "R",
				// 	fontAwesomeClassname: "cib:r",
				// },

				{
					skillName: "Jupyter",
					fontAwesomeClassname: "logos:jupyter",
				},

				{
					skillName: "Onnx",
					fontAwesomeClassname: "simple-icons:onnx",
				},
			],
		},
		{
			title: "Evolutionary Robotics",
			lottieAnimationFile: "/lottie/skills/4228-robot-arm.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experienced with constrained optimization problems in robotics using various algorithms such as ABC, PSO, A*, RRT*, and others."),
				emoji(
					"⚡ Expert in genetic algorithms, evolution strategies, differential evolution and estimation of distribution algorithms."
				),
				emoji(
					"⚡ Proficient in robotics controllers (state-machines, neural-networks, graphs, Behavior Trees, and others). "
				),
				emoji(
					"⚡ Authored various peer-reviewed papers for designing resilient swarm."
				),
				emoji(
					"⚡ Wrote controllers for various robotic platform like Sphero, Cozmo, Baxter, Turtlebot and others."
				),
			],
			softwareSkills: [

				{
					skillName: "ROS",
					fontAwesomeClassname: "simple-icons:ros",
				},
				{
					skillName: "Java",
					fontAwesomeClassname: "vscode-icons:file-type-java",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Azure",
					fontAwesomeClassname: "logos:microsoft-azure",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Github",
					fontAwesomeClassname: "akar-icons:github-fill",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				// {
				// 	skillName: "Github Actions",
				// 	fontAwesomeClassname: "logos:github-actions",
				// },
				// {
				// 	skillName: "Cloudinary",
				// 	fontAwesomeClassname: "logos:cloudinary",
				// },
				// {
				// 	skillName: "Nginx",
				// 	fontAwesomeClassname: "logos:nginx",
				// },
				// {
				// 	skillName: "Sentry",
				// 	fontAwesomeClassname: "logos:sentry-icon",
				// },
			],
		},
		{
			title: "Autonomous Vehicle",
			lottieAnimationFile: "/lottie/skills/74839-car-isometric-3d-animation-navigation-car-red-car-in-nature-car-on-the-road.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Graduated from self-driving car specilization (Coursera and Udacity). "
				),
				emoji(
					"⚡ Experience in various control strategies such as model predictive control, PID, geometric control, imitation learning based control, and RL based control."
				),
				emoji(
					"⚡ Proficient in sensor fusion by aggregrating data from various sensors such camera, LIDAR, RADAR, SONAR, IMU, GNNS, and others."
				),
				emoji(
					"⚡ Familiar with various simultaneous localization and mapping (SLAM) strategies for state estimation."
				),
				emoji(
					"⚡ Seasoned with safe and reliable Behavior planning that integrates linear temporal logic."
				),
			],
			softwareSkills: [
				{
					skillName: "Nvidia",
					fontAwesomeClassname: "cib:nvidia",
				},
				{
					skillName: "Udacity",
					fontAwesomeClassname: "logos:udacity-icon",
				},
				{
					skillName: "Coursera",
					fontAwesomeClassname: "academicons:coursera-square",
				},
				{
					skillName: "Carla",
					fontAwesomeClassname: "carbon:machine-learning-model",
				},
				// {
				// 	skillName: "Ureal Engine",
				// 	fontAwesomeClassname: "logos:unrealengine-icon",
				// },
				{
					skillName: "Unity",
					fontAwesomeClassname: "cib:unity",
				},
				{
					skillName: "ROS",
					fontAwesomeClassname: "simple-icons:ros",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "ML Algorithms",
		progressPercentage: "90",
	},
	{
		Stack: "Programming",
		progressPercentage: "90",
	},
	{
		Stack: "Backend",
		progressPercentage: "80",
	},
	{
		Stack: "ML Ops",
		progressPercentage: "70",
	},
	{
		Stack: "System Architecture/Desing",
		progressPercentage: "70",
	},
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "30", //Insert relative proficiency in percentage
	},
];

export const educationInfo = [
	{
		schoolName: "Brigham Young University",
		subHeader: "PhD in Computer Science",
		duration: "January 2019 - December 2022",
		desc: "Participated in the research of goal formulation and verification in AI agents.",
		// descBullets: [
		//
		// ],
	},
	{
		schoolName: "Brigham Young University",
		subHeader: "Master of Science in Computer Science",
		duration: "January 2017 - December 2018",
		desc: "Participated in the research of evolution of swarm behaviors using grammatical evolution.",
		// descBullets: [
		//
		// ],
	},
];

export const experience = [
	{
		role: "Research Assistant",
		company: "Brigham Young University",
		companylogo: "/img/icons/common/BYU.svg",
		date: "Jan 2017 – Present",
		// desc: "",
		descBullets: [
			"Built a miniature autonomous car to complete 0.7 miles tracks without a GPS signal utilizing visual place recognition for the 2019 self-driving car hackathon at BYU. Implemented using Python, ROS, C++ and Tensorflow.",
			"Examined and authored an reinforcement learning algorithm combining proximal policy optimization (PPO) and attention mechanism to model temporal credit assignment problem in Super mario and Maze worlds. Implemented using PyTorch.",
			"Pioneered and authored distributed Grammatical Evolution algorithm with Behavior Trees controllers to evolve resilient collective behaviors in swarm robotics. Implemented a custom Swarm simulator using Python and Numpy.",
			"Built a machine learning framework for cooperative transport for multiple robots harnessing occlusion-based proofs and robotic vision algorithms. Implemented using Python, ROS, and Cozmo robot APIs.",
		],
	},
	// {
	// 	role: "Research Intern",
	// 	company: "Vivant Smart Homes",
	// 	companylogo: "/img/icons/common/bleedAI.jpg",
	// 	date: "Sept 2021 - Oct 2021",
	// 	desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	// },
	{
		role: "Computer Vision Intern",
		company: "Pollen Sense",
		companylogo: "/img/icons/common/ps.jpeg",
		date: "April 2020 - August 2020",
		// desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
		descBullets: [
			"Remodeled pollen classification system to use RCNN based segmentation algorithm for fine-grain pollen classification from microscopic images. Implemented using PyTorch and using Onyx to move the trained model to the edge device.",
			"Composed a UI platform to label, train, and evaluate thousands of microscopic pollen images applying unsupervised learning algorithms. Built on Python and UI with nodejs. ",
			"Investigated pollen forecasting system using the historical pollen data, weather data, and sporadic sensor data. Used LSTM for prototyping and Prophet open source framework for deployment.",
		],
	},
	{
		role: "Machine Learning Engineer",
		company: "Inspiring Lab",
		companylogo: "/img/icons/common/is.png",
		date: "November 2014 - April 2020",
		// desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
		descBullets: [
			"Coordinated to create first public Nepali Character dataset using a semi-supervised approach. Used k-means clustering, hashing, and bash scripts to develop the dataset.",
			"Conceptualized and implemented customer care chat-bot project for Nepali telecommunication companies wielding combinations of AIML, NLTK and DNNs.",
		],
	},

	{
		role: "Software Engineer",
		company: "Verisk",
		companylogo: "/img/icons/common/verisk.jpeg",
		date: "May 2014 - November 2016",
		// desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
		descBullets:[
			"Collaborated with a team of 9 to launch an ETL tool called AIP exercising Bash, Python, and Java saving 20 hr/week of data preprocessing tasks for 200+ data engineers.",
			"Maintained Oracle RAC servers and wrote cross-machine daemon process manager using bash and awk. ",
			"Streamlined analysis of mammoth healthcare claims data exploiting Hadoop clusters.",
		],
	},
];

export const projects = [
	{
		name: "Active Listening Chatbot",
		desc: "Task-based chatbots tend to suffer from either overconfidence or ignorance — giving a response that is confidently wrong or completely uncertain (e.g.“I don’t know”). A chatbot that could identify the source of its uncertainty and ask a clarifying question would lessen the burden of query reformulation for the user. We introduce a two-turn query-response-query (QRQ) task, in which a user queries the chatbot and the chatbot must ask a clarifying question, which results in a second user query that clarifies the user’s intent. We evaluate performance in two ways: 1) by the perplexity of the response on the Taskmaster-2 dataset, and 2) by information acquisition between the first user query and the second user query, as measured by an intent classifier. We train a variety of architectures for these objectives, including a supervised encoder-decoder transformer and an unsupervised system trained to acquire more information from the second query than the first. Although the unsupervised system does not currently improve on baseline, there are positive indications that a similar approach could yield positive results in future.",
		link: "http://aadeshnpn.com/wp-content/uploads/2021/04/Self_Driving_Car_project.pdf",
		slides: "http://aadeshnpn.com/wp-content/uploads/2021/04/Just-To-Be-Sure-Building-A-Virtual-Assistant-With-Active-Listening-Skills.pdf",
		// media: "https://raw.githubusercontent.com/aadeshnpn/Temporal-Credit-Assignment/master/temporal.png"
	},
	{
		name: "Minimal Self-driving car",
		desc: "It is crucial not only to understand the specialized subsystem of an autonomous vehicle like lane detection, vSLAM, and traffic light detection to build a safe and reliable self-driving car, but understanding the subsystem interaction with each other is equally important. So for our CS704R project, first, we independently implement those specialized subsystems. Second, we combine those modules to build a minimal self-driving car agent in ROS. Finally, we test our agent in a simulated highway environment. Our minimal agent was successful in driving on the highway track. For this project, we have modified the Udacity self-driving car simulator to work with latest ROS (Noetic) and Python 3",
		link: "http://aadeshnpn.com/wp-content/uploads/2018/09/HandOut.pdf",
		slides: "http://aadeshnpn.com/wp-content/uploads/2021/04/Self-driving-car-project_slides.pdf",
		github: "https://github.com/aadeshnpn/CarND-Capstone"
	},
	{
		name: "Autonomous car simulation with Model Predictive Control (MPC)",
		desc: "PID controller is quite a popular algorithm used in control theory. But it’s difficult for a PID controller to over come latency that is prevalent in the real-world systems. We describe an MPC that adapts well in presence of latency in the system. MPC is an advanced method of process control that is used to control a system while satisfying a set of constraints. MPC model has been successfully applied to vehicles with bicycle models and is a popular choice with self-driving cars. First, a brief description of the stable, controllable, and observable properties of the system is provided. Followed by the system model, constraints, and cost function. We implement the MPC controller to a car simulator and evaluate its performance. This project was a part of the  ECEN 773 class.",
		// link: "http://aadeshnpn.com/wp-content/uploads/2021/04/Self_Driving_Car_project.pdf",
		slides: "https://docs.google.com/presentation/d/1icL1CCnOQU9FbPRdaftXhYD3zVVCeBJ1NbWVgvBMamo/edit?usp=sharing",
		// media: "https://raw.githubusercontent.com/aadeshnpn/Temporal-Credit-Assignment/master/temporal.png"
	},
	{
		name: "Homomorphic learning: A privacy-focused approach to machine learning",
		desc: "Cryptography and data science research grew exponential with the internet boom. Legacy encryption techniques force users to make a trade-off between usability, convenience, and security. Encryption makes valuable data inaccessible, as it needs to be decrypted each time to perform any operation. Billions of dollars could be saved, and millions of people could benefit from cryptography methods that don’t compromise between usability, convenience, and security. Homomorphic encryption is one such paradigm that allows running arbitrary operations on encrypted data. It enables us to run any sophisticated machine learning algorithm without access to the underlying raw data. Thus, homomorphic learning provides the ability to gain insights from sensitive data that has been neglected due to various governmental and organization privacy rules.In this paper, we trace back the ideas of homomorphic learning formally posed by Ronald L. Rivest and Len Alderman as “Can we compute upon encrypted data?” in their 1978 paper. Then we gradually follow the ideas sprouting in the brilliant minds of Shafi Goldwasser, Kristin Lauter, Dan Bonch, Tomas Sander, Donald Beaver, and Craig Gentry to address that vital question. It took more than 30 years of collective effort to finally find the answer “yes” to that important question.",
		link: "https://arxiv.org/abs/2009.04587",
		// slides: "http://aadeshnpn.com/wp-content/uploads/2021/04/Self-driving-car-project_slides.pdf",
		// github: "https://github.com/aadeshnpn/CarND-Capstone"
	},
	{
		name: "Emergence of Collective Behaviors in Hub-Based Colonies Using Grammatical Evolution and Behavior Trees",
		desc: "Animals such as bees, ants, birds, fish, and others are able to efficiently perform complex coordinated tasks like foraging, nest-selection, flocking and escaping predators without centralized control or coordination. These complex collective behaviors are the result of emergence. Conventionally, mimicking these collective behaviors with robots requires researchers to study actual behaviors, derive mathematical models, and implement these models as algorithms. Since the conventional approach is very time consuming and cumbersome, this thesis uses an emergence-based method for the efficient evolution of collective behaviors.Our method, Grammatical Evolution algorithm for Evolution of Swarm bEhaviors (GEESE), is based on Grammatical Evolution (GE) and extends the literature on using genetic methods to generate collective behaviors for robot swarms. GEESE uses GE to evolve a primitive set of human-provided rules, represented in a BNF grammar, into productive individual behaviors represented by Behavior Tree (BT). We show that GEESE is generic enough, given an initial grammar, that it can be applied to evolve collective behaviors for multiple problems with just a minor change in objective function.Our method is validated as follows: First, GEESE is compared with state-of-the-art genetic algorithms on the canonical Santa Fe Trail problem. Results show that GEESE outperforms the state-of-the-art by a)~providing better solutions given sufficient population size while b)~utilizing fewer evolutionary steps. Second, GEESE is used to evolve collective swarm behavior for a foraging task. Results show that the evolved foraging behavior using GEESE outperformed both hand-coded solutions as well as solutions generated by conventional Grammatical Evolution. Third, the behaviors evolved for single-source foraging task were able to perform well in a multiple-source foraging task, indicating a type of robustness. Finally, with a minor change to the objective function, the same BNF grammar used for foraging can be shown to evolve solutions to the nest-maintenance and the cooperative transport tasks.",
		link: "http://aadeshnpn.com/wp-content/uploads/2019/09/Master_Thesis_Main.pdf",
		slides: "https://slides.com/aadeshnpn/thesis-swarms",
		github: "https://github.com/aadeshnpn/swarm"
	},
	{
		name: "Open Set Deep Networks",
		desc: "Current computer vision algorithms using Neural Nets with softmax function can only classify objects in between the labels used for training. If we provide the algorithm with the entirely different image still it will try to classify the image for the labels it knows. It would be amazing if these algorithms could distinguish between the images which are similar to what it has seen before and which are completely different. This problem is known as Open Set recognition problem. Addressing this problem would be tremendous benefits for computer vision as machines will be able to classify the objects more accurately and more robust to fooling images as well as adversarial images. We implement OSDN algorithm using Weibull fitting in the penultimate layers of Neural Nets to address the issue with Open Set recognition problem.",
		link: "http://aadeshnpn.com/wp-content/uploads/2018/09/HandOut.pdf",
		slides: "https://slides.com/aadeshnpn/open_set",
		github: "https://github.com/aadeshnpn/OSDN"
	},
	{
		name: "Cooperative Transport in Cozmo robots",
		desc: "Social animals cooperatively transport object which is many times bigger than themselves effectively. Mimicking those behaviors on real robots will have diverse applications in engineering, health care and search and rescue. In this paper, we define different categories of cooperative transport problems and discuss different tools and techniques to tackle them. We then show that occlusion-based cooperative transport techniques are effective when the object is convex and there are enough agents to overcome frictional force. Results show that even with only two robots, the occlusion-based technique is able to transport objects 60\% of the time.",
		link: "http://aadeshnpn.com/wp-content/uploads/2018/09/cooperative-transport-mobile.pdf",
		slides: "https://slides.com/aadeshnpn/ct#",
		github: "https://github.com/aadeshnpn/cooperative-transport"
	},
	{
		name: "Actor-Critic Reinforcement Learning for Classic Control problem",
		desc: "Social animals cooperatively transport object which is many times bigger than themselves effectively. Mimicking those behaviors on real robots will have diverse applications in engineering, health care and search and rescue. In this paper, we define different categories of cooperative transport problems and discuss different tools and techniques to tackle them. We then show that occlusion-based cooperative transport techniques are effective when the object is convex and there are enough agents to overcome frictional force. Results show that even with only two robots, the occlusion-based technique is able to transport objects 60\% of the time.",
		link: "http://aadeshnpn.com/wp-content/uploads/2018/09/actor-critic-reinforcement.pdf",
		slides: "https://slides.com/aadeshnpn/cs678_acrl#/",
		// github: "https://github.com/aadeshnpn/cooperative-transport"
	},
	{
		name: "Slogan Generator",
		desc: "Creating catchy slogans is a demanding and clearly creative job for ad agencies. The process of slogan creation by humans involves finding key concepts of the company and its products, and developing a memorable short phrase to describe the key concept. We attempt to follow the same sequence, but with an evolutionary algorithm. A user inputs a paragraph describing describing the company or product to be promoted. The system randomly samples initial slogans from a corpus of existing slogans. The initial slogans are then iteratively mutated and improved using an evolutionary algorithm. Mutation randomly replaces words in an individual with words from the input paragraphs. Internal evaluation measures a combination of grammatical correctness, and semantic similarity to the input paragraphs. Subjective analysis of output slogans leads to the conclusion that the algorithm certainly outputs valuable slogans. External evaluation found that the slogans were somewhat successful in conveying a message, because humans were generally able to select the correct promoted item given a slogan.",
		link: "http://aadeshnpn.com/wp-content/uploads/2018/09/Slogan_Generator.pdf",
		slides: "https://slides.com/aadeshnpn/slogatron#/",
		// media: "https://raw.githubusercontent.com/aadeshnpn/Temporal-Credit-Assignment/master/temporal.png"
	},
];

export const feedbacks = [
	// {
	// 	name: "John Smith",
	// 	feedback:
	// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	// },
	// {
	// 	name: "John Smith",
	// 	feedback:
	// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	// },
];
