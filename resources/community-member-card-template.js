const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

module.exports = (data) => {
  const date = data.date
  const yyyy = date.getFullYear()
  const month = monthNames[date.getMonth()]
  const dd = ('0' + (date.getDate())).slice(-2)
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    body {
      margin: 0;
      color: white;
      font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    }

    .author {
      font-size: 28px;
      font-weight: 600;
      display: block;
      padding-bottom: 0.5rem;
    }

    .title {
      font-size: 17px;
      display: block;
    }

    .date {
      font-size: 17px;
    }

    main {
      background-image: url('${data.backgroundDataUri}');
      width: 800px;
      height: 400px;
    }

    section {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    header {
      padding-left: 1rem;
      padding-top: 0.5rem;
    }

    footer {
      align-self: flex-end;
      margin-top: auto;
      margin-bottom: 25px;
      margin-right: 15px;
    }

    .meta .avatar {
      width: 300px;
      height: 300px;
      border-radius: 100%;
      position: absolute;
      top: 95px;
      margin-left: 5px;
    }

    .avatar {
      background-image: url(${data.avatarDataUri});
      background-position: center;
      background-size: cover;
    }
  </style>
</head>
<body>
  <main>
    <section>
      <header>
        <div class="meta">
          <div class="byline">
            <span class="author">${data.communityMember.name}</span>
            <span class="title">${data.communityMember.title}</span>
          </div>
          <div class="avatar"></div>
        </div>
      </header>
      <footer>
        <div class="date">
          ${month} ${dd}, ${yyyy}
        </div>
      </footer>
    </section>
  </main>
</body>`
}
