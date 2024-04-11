// GOAL:
// Render an unordered list with the class
// “badge-list” when the user has at least
// 1 badge.
//
// Each badge is an object with this shape:
// { slug: string, label: string }
//
// STRETCH:
// If the user has 3+ badges, the “golden”
// class should be added to the unordered
// list (in addition to “badge-list”).
/*
    badges: [
      {
        slug: 'notable',
        label: '⭐️ Notable',
      },
      {
        slug: 'musician',
        label: '🎸 Musician',
      },
    ]
 */

function ProfileCard({ profile }) {

  const badges = profile.badges

  const badgeList = "<ul class="badge-list"><li>badges[]</li></ul>";
  return (
    <article className="profile-card">
      <header>
        <img
          alt={profile.imageAlt}
          src={profile.imageSrc}
        />

        <h2>{profile.name}</h2>
        <p className="joined">
          Joined {profile.joinDate}
        </p>
        {badges.length > 0 }
      </header>
      
    </article>
  );
}

export default ProfileCard;