---
title: How to edit a post?
---

## Editing a post

This website use the [Jekyll](https://jekyllrb.com/) blogging system and is hosted publicly on [Github pages](https://pages.github.com/). This mean everybody can view the code and submit revisions. The cool thing is you can use the [prose](http://prose.io/) online editor to submit a post revision. All you need is a [Github](https://github.com/) account.

Once your Github account created, go back to this website, open a post, go to the last tab and click on **Edit this article** button.

## Syntax

Posts use the **Markdown** language syntax, a human readable and simplified alternative to HTML. You can read the [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to learn the few base rules. If you already know HTML, the good news is that you can even use this language, or even mix the two languages.

Each file **MUST** contain a front mater containing useful data like the title and other custom information that will be used by the template. Here are examples.

#### The minimum required

```markdown
---
title: "My post title"
---
Here you can type free text using the markdown syntax, HTML, or a mix of the two. You can provide useful information depending on the subject

```

#### Basic syntax example

```markdown
---
title: "My post title"
description: "A Short one line explicit description."
image: "http://upload.wikimedia.org/wikipedia/en/thumb/7/72/ARC%27TERYX_logo.svg/220px-ARC%27TERYX_logo.svg.png"
brands: [amer-sports]
purposes: [outdoor-cloth, bag]
types: [bag, ]
countries: [canada]
website: "http://arcteryx.com"
wiki: "https://en.wikipedia.org/wiki/Arc%27teryx"
---

## Title

- List item
- List item
  - Sub level list item

1. Ordered list item
2. Ordered list item

Some text with *italic*, **bold**, ~~strikethrough~~ and [link](http://www.amazon.com "Go to Amazon website").

![Logo Amazon](https://images-na.ssl-images-amazon.com/images/G/01/SellerCentral/legal/amazon-logo_transparent.png "Available at Amazon")

### Title level 2

...

#### Title level 3

...

```

## Create a new post

Go to the [pickyvagabond repository](https://github.com/chrisbo246/pickyvagabond), browse up to the appropriate folder (**_posts**, **_types**, **_purposes**, **_brands**, etc...) and create a new file with a **.md** extension. Use a meaningful name with only low cases and hyphens.

## Front matter examples

#### Brand

```markdown
---
title: "Arc'teryx"
description: ~
image: "http://upload.wikimedia.org/wikipedia/en/thumb/7/72/ARC%27TERYX_logo.svg/220px-ARC%27TERYX_logo.svg.png"
brands: [amer-sports]
purposes: []
types: []
countries: [canada]
website: "http://arcteryx.com"
shop: "http://arcteryx.com"
store-finder: ~
about: "http://arcteryx.com/about/"
wiki: "https://en.wikipedia.org/wiki/Arc%27teryx"
---
```

#### Purpose

```markdown
---
title: Firelighting
aliases: ["light fire"]
description: "Light the bonfire."
image: "https://images-na.ssl-images-amazon.com/images/I/41G+DcnfNZL.jpg"
purposes: [outdoor, cook, pack, backpack, outdoor-cook, smock, burn]
wiki: "https://en.wikipedia.org/wiki/Firelighting"
---
```

#### Type

```markdown
---
title: Backpacking tent
description: Compact and lightweight personal tent that fits in a bag.
image: "http://ecx.images-amazon.com/images/I/319N6G7TPzL.jpg"
brands: [vaude]
purposes: [shelter, bivouac-shelter]
types: [tent]
wiki: ~
---
```

#### Product

```markdown
---
title: "Vaude Campo Compact tent"
description: "An basic but spacious and relatively reliable tent with a very affordable price."
image: "https://images-na.ssl-images-amazon.com/images/I/31WZHc5i4kL.jpg"
brands: [vaude]
features: [freestanding, double-wall, alloy-poles, alloy-pegs]
types: [tent]
purposes: [shelter]
product-sheet: "http://www.vaude.com/en-GB/Products/Tents/Campo-Compact-2P-linen.html"
pros:
  - Compact and discrete
  - High door
  - full inner wall
  - Easy mounting
dealers:
 - "https://www.amazon.com/Vaude-Campo-dome-Compact-green/dp/B009ZRLXSM/"
---
```
