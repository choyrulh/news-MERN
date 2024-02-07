class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    const queryObj = { ...this.queryString };
    const excludedFields = ["page", "sort", "limit", "fields", "search"];
    excludedFields.forEach((el) => delete queryObj[el]);

    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }

  search() {
    if (this.queryString.search && this.queryString.search.trim() !== "") {
      const search = this.queryString.search;
      // using regex
      this.query = this.query.find({
        $or: [{ title: { $regex: search, $options: "i" } }],
      });

      this.query = this.query.sort("-publish_date");
    }
    return this;
  }
  searchAuthor() {
    if (this.queryString.search && this.queryString.search.trim() !== "") {
      const search = this.queryString.search;
      // using regex
      this.query = this.query.find({
        $or: [{ author: { $regex: search, $options: "i" } }],
      });

      this.query = this.query.sort("-publish_date");
    }
    return this;
  }
  searchTag() {
    if (this.queryString.search && this.queryString.search.trim() !== "") {
      const search = this.queryString.search;
      // using regex
      this.query = this.query.find({
        $or: [{ tag: { $regex: search, $options: "i" } }],
      });

      this.query = this.query.sort("-publish_date");
    }
    return this;
  }

  // search() {
  //   if (this.queryString.search && this.queryString.search.trim() !== "") {
  //     const search = this.queryString.search;
  //     // using regex
  //     this.query = this.query.find({
  //       $or: [{ title: { $regex: search, $options: "i" } }],
  //     });
  //     this.query = this.query.sort("-publish_date");
  //   } else {
  //     this.query = this.query.find({ title: "No Result" }); // tambahkan ini
  //   }
  //   return this;
  // }
  limitFields() {
    if (this.queryString.fields) {
      const fields = this.queryString.fields.split(",").join(" ");
      this.query = this.query.select(fields);
    } else {
      this.query = this.query.select("-__v");
    }
    return this;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 20;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);
    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(",").join(" ");
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort("-publish_date");
    }
    return this;
  }
}

exports.APIFeatures = APIFeatures;
