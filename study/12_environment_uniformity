## Environment uniformity
Let's step back into the legacy application space for a moment. Often times, you as a developer
, write a feature and that feature gets staged to a non-prod environment for an extended period
of time. Once a release is ready is to go, your feature, and many others, are packaged up as a release and
moved through several non-prod environments for integration and testing. Any defect requires a decision to hold the
release for a fix or accept the buggy code into the higher environment.

Eventually, sometimes months later, your code is deployed by someone else, after you have forgotten about the code you wrote. This lapse of time, from dev to prod,
often yields a wide gap between what production looks like and what development looks like, increasing a risk of bugs. Also, these environments tend to be
very large and as such, the resources of a production are very different than the lower environments.

The difference in resources can also cause software defects. It's a vicious cycle because the time it takes to get a fix to production. Enter the 12-factor way
of dealing with this, and that very simply is to not allow a wide gap between your environments. In a 12-factor world, the differences between production code and develoment code is a few working features at most.

Once a feature is completed, it is quickly rolled to production to keep the non-prod and prod environments
in synced as much as possible. In additon to the code, the resources and technologies used in production are the same s those used in non-prod.
Another element outside the code with regards to dev-prod parody, is the people involved.

Now, moving a legacy application to this model is less about code and more about the software development life cycle for the team and the
ecosystem as a whole that they work in. The organization needs a fairly radical mindset to move to this model. Large companies that I ahve spoken with that have evolved to this model, ahve gone from one to two
releases a year to as many as 10 to 20 a day or more. When a feature that takes time and resorces to develop is available immediately to the ustomer, people will quickly notice and when that annoying bug is quickly fixed,
people will start wanting to be part of that process.
