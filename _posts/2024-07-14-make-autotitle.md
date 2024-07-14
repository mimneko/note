---
tags: [jekyll]
---

# タイトルをjekyllのtitleにできるようにした

`_plugins/auto_title.rb`に作成。
```ruby
require 'jekyll'

module Jekyll
  class AutoTitleGenerator < Generator
    def generate(site)
      site.pages.each do |page|
        unless page.data['title']
          if page.content =~ /^#\s+(.+)$/
            title = page.content.match(/^#\s+(.+)$/)[1]
            page.data['title'] = title
          else
            page.data['title'] = '無題'
          end
        end
      end
    end
  end
end
```
