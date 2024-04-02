import React from 'react';

function FAQ() {
  return (
    <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <title>Paradigm Pet Professionals</title>
        <link rel="stylesheet" href="universal.css" />
      </head>
      <body
        link="#0000EE"
        vlink="#551A8B"
        text="#000000"
        bgcolor="#ccffff"
        alink="#EE0000"
      >
        <h1>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        </h1>
        <img
          className="logo"
          src="petshoplogo.png"
          alt="generic picture"
          height="142"
          width="140"
        />
        <h1>FAQs</h1>
        <hr width="100%" size="2" />
        <br />
        <div className="topnav">
          <a className="active" href="#home">
            Home
          </a>
          <a href="cats.html">Dogs</a>
          <a href="dogs.html">Cats</a>
          <a href="FAQs.html">FAQs</a>
          <input type="text" placeholder="Find something..." />
          <button type="submit">Fetch</button>
        </div>

        <p>
          <i>
            Our “Pexperts” typically encounter the following questions when
            consulting with prospective “pet parents:”
          </i>
        </p>
        <br />
        <h3>
          <strong>Question:</strong> What is the best way to rid my dog or cat
          of fleas?
        </h3>
        <p>
          Sometimes our furry friends pick up hitchhikers that make them very
          itchy and uncomfortable. If gone unchecked, fleas can infest your
          home, making it even more difficult to rid them from your loved one’s
          coat. To eliminate fleas, choose a shampoo specially formulated to
          kill fleas and be sure to read and follow all instructions on the
          label. Repeat treatment as necessary until your pet is free of fleas;
          if you see skin irritation, stop use immediately and contact your
          local vet.
        </p>
        <br />
        <h3>
          <strong>Question:</strong> How long can I expect my pet bird to live?
        </h3>
        <p>
          The answer can vary widely depending on the type of bird, the size,
          the environment, and of course, mother nature. Assuming all is well in
          the external factors that are out of the owner's control, cockatiels
          and budgies live up to 20 years old on average. However, many parrot
          variations are known to live nearly an astounding 100 years! As with
          many living organisms, longevity can be increased by keeping annual
          veterinarian visits, maintaining a healthy diet, and keeping your
          feathery friend's environment sanitary.
        </p>
        <br />
        <h3>
          <strong>Question:</strong> How often should I feed my pet snake?
        </h3>
        <p>
          Most snakes eat one to two times per week, depending on their age,
          size, and activity level. Female snakes often increase their food
          intake as breeding season gets underway. Some snakes can go as long as
          two weeks before needing their next meal; this is normal. However, if
          your snake has not eaten in two or three weeks and seems lethargic,
          reach out to your local vet to determine if your snake might be ill or
          injured.
        </p>
        <br />
      </body>
    </html>
  );
}

export default FAQ;