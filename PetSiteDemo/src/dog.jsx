import React from 'react';

function Dog() {
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
        <h1>Dogs</h1>
        <hr width="100%" size="2" />
        <br />
        <div className="topnav">
          <a href="home.html">Home</a>{' '}
          <a className="active" href="cats.html">
            Cats
          </a>
          <a href="dogs.html">Dogs</a> <a href="FAQs.html">FAQs</a>
          <input type="text" placeholder="Find something..." />
          <button type="submit">Fetch</button>
        </div>
        <p>
          <i>
            The canis familiaris, or domestic dog, is a very social animal, and
            owning a dog can have many mutual benefits between both dog and
            owner. There have been many studies throughout the last couple of
            centuries citing not only social benefits of having a companion and
            reduced feelings of loneliness by adopting a dog, but even medical
            indicators such as{' '}
            <a
              href="https://www.ahajournals.org/doi/10.1161/CIRCOUTCOMES.119.005554"
              target="_self"
              title="Dog Ownership and Survival"
            >
              reduced blood pressure and improved lipid profiles
            </a>
            . So if you have a dog, it is important to make sure that you care
            for your dog; be mindful of what you feed them, and provide enough
            opportunities for exercise. In this page, you will find more
            information about how to care for your pets throughout the various
            stages of their lives.
          </i>
        </p>
        <br />
        <h3>Diet & Exercise</h3>
        <p>
          Throughout the lifespan of a dog, there should generally be fewer and
          fewer meals as your young one matures. First, they should start with
          being nursed for the first two months. Then, dogs should eat three
          meals per day when they are about 3–6 months years old, two meals per
          day when they are 6 months to one year old, and finally one meal per
          day after they reach one year old. Typically, somewhere between sixty
          and seventy percent of an adult dog's mass is water.{' '}
          <a
            href="https://www.aspca.org/pet-care/dog-care/dog-nutrition-tips"
            target="_self"
          >
            ASPCA says
          </a>{' '}
          just a 10% decrease in body water can cause illness, and 15% loss can
          cause death!
        </p>
        <p>
          Much like humans, dogs need to have a healthy level of activity to
          keep their blood, heart, and really every organ healthy. They need to
          exercise like we do. They need sun and fresh air. The recommended time
          necessary to qualify as sufficient exercise varies greatly with breed
          and size differences, but generally it is recommended to have at least
          30–120 minutes of exercise per day! Can you imagine exercising 2 hours
          per day? Okay, I know that wouldn't bother some of you reading this.
          But the thought of it to me makes me cringe! And by the way,
          exercising your dog does not mean they challenge you to a push-up
          contest. Brisk walks are okay, too!
        </p>
        <br />
        <h3>Grooming & Handling</h3>
        <p>
          Keeping your furry family member clean is important to the dog’s
          health. So be sure to brush frequently to reduce the amount of hair
          that sheds all over the place, and check for insects such as ticks and
          fleas. And bathe them once in a while! This in itself can be an
          exercise depending on how strong-willed the dog is. Do make sure
          though to get ALL of the soap out! If there is any residual soap, it
          can result in a rash (if the soap is a harsh soap or if the dog is
          potentially allergic to the chemicals) or matted and tangled fur that
          can prove to be extremely difficult to remove. As always, be careful
          how you handle your loved one. No matter the size of your dog, you
          need to be cautious as you carry your dog. If you have a small dog,
          then cradle the pup with one hand under the chest and the forearm
          supporting the back half. If it is a large dog, reach under the belly
          with both your arms perpendicular to the dog, and use each arm to
          support the chest and rear as you lift.
        </p>

        <br />
        <h3>Vaccinations & Medications</h3>
        <p>
          You should ALWAYS consult with your veterinarian, but there is a core
          set of vaccines that are typically recommended. Vaccines reduce the
          exposure risk to things such as hepatitis, rabies, and parvovirus.
          Others may be determined by your vet depending on the environment in
          which the dog resides. Some of these include{' '}
          <a
            href="https://www.aspca.org/pet-care/general-pet-care/vaccinations-your-pet"
            target="_blank"
          >
            Bordetella bronchiseptica, Borrelia burgdorferi, and Leptospira
            bacteria
          </a>
          .
        </p>

        <br />
      </body>
    </html>
  );
}

export default Dog;
