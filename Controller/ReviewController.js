const { response } = require("express");
const reviews = require("../Models/ReviewSchema");

exports.addReviewAPI = async (req, res) => {
    console.log('Inside add review API');
    const { title, author, reviewnote, rating,genre,description } = req.body;
    const userId = req.payload // Ensure userId from JWT middleware
    const bookImg = req.file.filename;
  
    try {
      const existingReview = await reviews.findOne({ title, author,reviewnote });
      if (existingReview) {
        return res.status(400).json({ message: "Review already exists" });
      }
  
      const newReview = new reviews({
        title, author, reviewnote,genre,description, rating, bookImg, userId
      });
      await newReview.save();
  
      res.status(201).json({ message: "Review added successfully", data: newReview });
      console.log(newReview);
    } catch (err) {
      console.error("Error adding review:", err);
      res.status(500).json({ message: "Server error", error: err });
    }
  };
  exports.getHomereviewAPI=async(req,res)=>{
try {
  const response=await reviews.find()
  res.status(200).json(response)
  
} catch (err) {
  res.status(406).json(err)
  
}
  }
  exports.getAllUserreviewAPI=async(req,res)=>{
    try {
      const response=await reviews.find()
      res.status(200).json(response)
    } catch (err) {
      res.status(400).json(err)
    }
  }
  exports.getUserreviewAPI=async(req,res)=>{
    const userId=req.payload
    console.log("Inside get a User review");
    console.log(userId);
    
    
    try {
      const response=await reviews.find({userId})
      
      res.status(200).json(response)
    } catch (err) {
      res.status(406).json(err)
      
    }
  }
  exports.editReviewAPI = async (req, res) => {
    console.log("Inside EditReviewAPI");

    // Destructure required fields from req.body
    const { title, author, reviewnote, rating, genre, bookImg, description } = req.body;
    const updateImg = req.file ? req.file.filename : bookImg;
    const userId = req.payload; // Extracted from JWT middleware
    const { reviewId } = req.params;

    console.log("ReviewId:", reviewId);
    console.log("Book Image:", bookImg);
    console.log("Details:", title, author, reviewnote, rating, genre, userId, description);

    try {
        // Find and update the review by ID
        const review = await reviews.findByIdAndUpdate(
            { _id: reviewId },
            {
                title,
                author,
                reviewnote,
                rating,
                genre,
                description,
                bookImg: updateImg,
            },
            { new: true } // Ensures the updated review is returned
        );

        // If no review is found, return an error
        if (!review) {
            return res.status(404).json({ error: "Review not found" });
        }

        // Return the updated review
        res.status(200).json(review);
    } catch (err) {
        console.error("Error updating review:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


exports.deletereviewAPI = async (req, res) => {
  console.log("Inside delete API");
  const { reviewId } = req.params
  console.log(reviewId);
  try {

      const review = await reviews.findByIdAndDelete({ _id: reviewId })
      res.status(200).json(review)
  } catch (err) {
      res.status(406).json(err)
  }

}
