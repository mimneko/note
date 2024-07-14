# _plugins/auto_title.rb

module Jekyll
  class MarkdownTitleGenerator < Generator
    def generate(site)
      site.pages.each do |page|
        if page.extname.downcase == '.md' || page.extname.downcase == '.markdown'
          unless page.data['title']
            title = extract_title(page.content)
            page.data['title'] = title || '無題'
          end
        end
      end
    end

    private

    def extract_title(content)
      if content =~ /^#\s+(.+)$/
        return content.match(/^#\s+(.+)$/)[1]
      end
      nil
    end
  end
end
