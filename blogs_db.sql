-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 01, 2025 at 05:40 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogs_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `category` varchar(50) NOT NULL,
  `author_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `image`, `content`, `category`, `author_id`, `created_at`) VALUES
(7, 'The Beauty of Nature', 'uploads\\1740213894765-pexels-daejeung-2734469.jpg', 'Nature is one of the most precious gifts we have. From the lush green forests to the serene blue oceans, it offers us peace, inspiration, and a sense of belonging. Every sunrise brings a new beginning, and every sunset reminds us to cherish the moments we have.\r\n\r\nSpending time in nature can reduce stress, improve mental health, and boost creativity. Whether it\'s a walk in the park, a hike in the mountains, or simply sitting by a lake, nature has a way of healing and rejuvenating us.\r\n\r\nLet\'s take a moment to appreciate the beauty around us and do our part to protect it. After all, nature is not just a place to visit—it\'s our home.', 'Lifestyle', 4, '2025-02-22 08:44:54'),
(8, 'Exploring the Wonders of Iceland', 'uploads\\1740240431632-pexels-thephotosaccount-30715903.jpg', 'Iceland, the land of fire and ice, is a dream destination for travelers. With its stunning landscapes, including glaciers, volcanoes, and waterfalls, it’s no wonder Iceland is on so many bucket lists.\r\n\r\nOne of the must-visit spots is the Blue Lagoon, a geothermal spa surrounded by lava fields. The warm, mineral-rich waters are perfect for relaxation. Another highlight is the Golden Circle, a route that includes Thingvellir National Park, Geysir, and Gullfoss waterfall.\r\n\r\nWhether you’re chasing the Northern Lights or hiking on a glacier, Iceland offers unforgettable experiences for every type of traveler.', 'travel', 3, '2025-02-22 16:07:11'),
(9, 'The Future of Artificial Intelligence', 'uploads\\1740240526502-123456789.jpg', 'Artificial Intelligence (AI) is transforming the world as we know it. From self-driving cars to virtual assistants like Siri and Alexa, AI is becoming an integral part of our daily lives.\r\n\r\nOne of the most exciting developments in AI is its application in healthcare. AI-powered tools can now diagnose diseases, predict patient outcomes, and even assist in surgeries. This not only improves accuracy but also saves lives.\r\n\r\nHowever, with great power comes great responsibility. As AI continues to evolve, we must address ethical concerns such as data privacy, bias, and job displacement. The future of AI is bright, but it’s up to us to ensure it benefits everyone.', 'Technology', 2, '2025-02-22 16:08:46'),
(10, 'Top 5 Hidden Gems in Europe', 'uploads\\1740410929493-pexels-thephotosaccount-30715903.jpg', 'Europe is known for its iconic landmarks like the Eiffel Tower and the Colosseum, but there are many hidden gems waiting to be discovered. In this blog, we take you off the beaten path to explore five lesser-known destinations that offer breathtaking scenery, rich history, and unique cultural experiences.', 'Travel', 2, '2025-02-24 15:28:49'),
(11, 'Exploring the Hidden Gems of Eastern Europe', 'uploads\\1740451791339-pexels-eberhardgross-1612357.jpg', 'Eastern Europe is often overlooked by travelers, but it’s a treasure trove of history, culture, and natural beauty. From the medieval charm of Tallinn, Estonia, to the stunning landscapes of Slovenia’s Lake Bled, this region offers something for every type of traveler. Wander through the cobblestone streets of Prague, explore the vibrant markets of Budapest, or hike the Carpathian Mountains in Romania. Eastern Europe is not only budget-friendly but also less crowded than its western counterpart, making it an ideal destination for those seeking an authentic and off-the-beaten-path experience.', 'travel', 3, '2025-02-25 02:49:51'),
(12, ' The Rise of Plant-Based Cuisine in Urban Centers', 'uploads\\1740451853583-jessica-pamp-2XeP0c-J5B4-unsplash.jpg', 'Plant-based eating is no longer a niche trend—it’s a global movement. Cities like Berlin, Los Angeles, and Bangkok are leading the charge with innovative vegan restaurants and street food options. From jackfruit tacos to cashew-based cheeses, plant-based cuisine is redefining what it means to eat sustainably. Chefs are experimenting with local ingredients to create dishes that are not only healthy but also bursting with flavor. Whether you’re a lifelong vegan or just curious, exploring plant-based menus in urban hubs is a culinary adventure worth embarking on.', 'health', 3, '2025-02-25 02:50:53'),
(13, 'The Resurgence of Analog Photography', 'uploads\\1740451902538-rebe-adelaida-zunQwMy5B6M-unsplash.jpg', 'In a world dominated by digital technology, analog photography is making a surprising comeback. Film cameras, once considered obsolete, are now sought after by photographers and enthusiasts who appreciate the tactile experience and unique aesthetic of film. From vintage Polaroids to medium-format cameras, analog photography encourages a slower, more intentional approach to capturing images. This resurgence is not just about nostalgia—it’s a celebration of the artistry and craftsmanship that goes into creating a physical photograph.\r\n\r\n', 'culture', 3, '2025-02-25 02:51:42'),
(19, 'Introduction to Node.js: A Powerful JavaScript Runtime', 'uploads\\1740816205170-60cb931867f2a7353919cd0a9a29ccbe.jpg', 'Node.js has revolutionized the way developers build and deploy web applications. Since its inception in 2009, Node.js has grown into one of the most popular runtime environments for executing JavaScript code outside the browser. Built on Chrome\'s V8 JavaScript engine, Node.js enables developers to create scalable, high-performance applications using JavaScript on both the client and server sides. In this article, we’ll explore what makes Node.js unique, its core features, and why it’s a go-to choice for modern web development.\r\nNode.js is an open-source, cross-platform runtime environment that allows developers to run JavaScript on the server. Unlike traditional server-side languages like PHP or Java, Node.js uses an event-driven, non-blocking I/O model, making it lightweight and efficient. This architecture is particularly well-suited for real-time applications, such as chat apps, online gaming, and streaming services, where low latency and high concurrency are critical.\r\nNode.js has become a cornerstone of modern web development, offering a powerful and efficient way to build scalable, real-time applications. Its event-driven architecture, extensive package ecosystem, and cross-platform compatibility make it a favorite among developers worldwide. Whether you’re building a small project or a large-scale enterprise application, Node.js provides the tools and flexibility needed to bring your ideas to life. As the JavaScript ecosystem continues to evolve, Node.js will undoubtedly remain a key player in the world of server-side development.', 'Development', 1, '2025-03-01 08:03:25'),
(20, 'The Evolution of JavaScript Development: A Comprehensive Guide', 'uploads\\1740822142414-jacc.PNG', 'JavaScript has come a long way since its inception in 1995. What started as a simple scripting language for adding interactivity to web pages has now become one of the most powerful and versatile programming languages in the world. Today, JavaScript is used for everything from front-end web development to back-end server programming, mobile app development, and even machine learning. In this article, we’ll explore the evolution of JavaScript development, its key features, and the modern tools and frameworks that make it indispensable for developers.\nJavaScript was created by Brendan Eich in just 10 days while he was working at Netscape. Initially, it was designed to make web pages more dynamic and interactive. Over the years, JavaScript has evolved significantly, thanks to its widespread adoption and the contributions of the developer community.', 'development', 9, '2025-03-01 09:42:22');

-- --------------------------------------------------------

--
-- Table structure for table `newsletter`
--

CREATE TABLE `newsletter` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subscribed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `newsletter`
--

INSERT INTO `newsletter` (`id`, `email`, `subscribed_at`) VALUES
(1, 'tigercaartoon@gmail.com', '2025-03-01 16:34:34');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `created_at`) VALUES
(1, 'shake', 'shakecartoon@gmail.com', '$2b$10$ptxoaWBm3VFiQ88aya/kF.BwjKETNzlAO2/e8MzoIoXhnTGq64Iym', '2025-02-18 15:29:58'),
(2, 'tiger', 'tigercartoon@gmail.com', '$2b$10$6eFQ2HZAQTCmvJ3Z3Uw16.FVO4OtMBKqOITb6IwNXONpwo.dlPm92', '2025-02-18 16:44:24'),
(3, 'caption', 'captioncartoon@gmail.com', '$2b$10$CMQVnQRIQVG6NCPQ84xIwORuHObls4qXtBReP/Uj6itBdRTslnigi', '2025-02-18 17:00:55'),
(4, 'Rasta', 'rastacartoon@gmail.com', '$2b$10$xnL2ukUUH8qKr3BwHEgzgO2c3a5ROsAQ2M19KGta6XTGzwbUFbKKe', '2025-02-18 17:04:00'),
(9, 'joe', 'cooljoedeveloper@gmail.com', '$2b$10$Pv070tNpLdyQxNH9IwAuPu88W1m6TaCjJ9MVL8o0z9XgTAso.cJh.', '2025-03-01 09:13:25');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author_id` (`author_id`);

--
-- Indexes for table `newsletter`
--
ALTER TABLE `newsletter`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `newsletter`
--
ALTER TABLE `newsletter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `blogs`
--
ALTER TABLE `blogs`
  ADD CONSTRAINT `blogs_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

