# MealTime Client

Studio Star is all-in-one, digital platform for private lesson teachers and students to document and access lesson assignments, log practice tasks, communicate studio-wide or individually, and provide or participate in practice incentives. Built with both remote and in-person teaching in mind, Studio Star is the "virtual assignment book" you've been waiting for!

## App Users <!-- This is a scaled down user persona -->
- Private lesson teachers who want a place to communicate with students and their families, document lesson assignments, and provide practice incentives.
- Students who want to log into the platform to see assignments, document practicing, and communicate with teachers. 
- Family members who want to support their student by viewing assignments and information posted by teachers. 
- Music lesson business owners who need a single platform where all employee teachers can have separate studio rosters. 

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- Studio Star uses Google authentication for users to log in, prior to registering for the app as a teacher or student. 
- If the user is a teacher, they create and name their studio. 
- If the user is a student, they select one or more teachers to enroll into their studio. 
- Teachers have a roster page showing students enrolled in their studio, who they may unenroll at any time. 
- From the roster page, teachers can navigate to any student's page to view, create, update, or delete assignments.
- Within each assignment, teachers can view, create, update, or delete specific tasks.
- Students can view all assignments and tasks created by their teacher on their personal assignment page.
- On each assigned task, students (and teachers) can choose, view, and delete stickers to log their practicing. Once the practice goal on a task has been met, the task updates to "complete."
- Both teachers and students can view a profile page with their user details. 
- Students may return to the enrollment page at any time to unenroll or enroll with alternate teachers. 

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [ERD](https://dbdiagram.io/d/64dab2db02bd1c4a5ec5752e)
- [Wireframes](https://www.figma.com/file/Eebb7ycjEUCTXMoZrNtSWd/MealTime-Wireframe?type=design&node-id=0-1&mode=design&t=da3tNYD4ww0ZTrCo-0)
- [Project Board](https://github.com/users/EvgBre/projects/3)
- [Server-side Repository](https://github.com/EvgBre/mealtime-server/tree/main)


## Code Snippet <!-- OPTIONAL, but doesn't hurt -->
```
  const handleSubmit = (e) => {
    // Prevent form from being submitted
    e.preventDefault();

    const food = {
      foodId: formInput.food_id,
      mealId: id,
      grams: formInput.grams,
    };
      // Send POST request to your API
    createMealFood(food).then(() => {
      onUpdate();
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add a Food Item to this Meal!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
              <Form.Label>Food Select</Form.Label>
              <Form.Select
                aria-label="Food"
                name="food_id"
                onChange={handleChange}
                className="mb-3"
                value={formInput.food_id}
                required
              >
                <option value="">Select a Food</option>
                {
            foods.map((food) => (
              <option
                key={food.id}
                value={food.id}
              >
                {food.name}
              </option>
            ))
          }
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>How many grams of this food are you having?</Form.Label>
              <Form.Control
                name="grams"
                required
                value={formInput.grams}
                type="number"
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="dark" type="submit">
              Submit
            </Button>
          </Form>

        </Modal.Body>
      </Modal.Dialog>
    </Modal>
  );
```

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
- TBA

## Video Walkthrough
- TBA


## Contributors
- [Evan Breland](https://github.com/EvgBre)
