namespace :sprites do
  desc "Assembles all spritesheets in `public/sprites/{folder}` ending in `-sheet.pnge` into their parent folders."

  task assemble: :environment do
    descend get_sprite_root
  end

  task clean: :environment do
    Dir.glob(get_sprite_root + '**/sheet.png').each do |file|
      puts "Deleting: " + file
      File.delete(file)
    end
  end

  def get_sprite_root
    Rails.root.join('public', 'sprites')
  end

  def descend dirname
    sheets = []

    Dir.foreach dirname do |f|
      next if f == '.' or f == '..'

      abs_path = "#{dirname}/#{f}"

      if File.directory? abs_path
        sheets.concat descend(abs_path)
      elsif abs_path.include? '-sheet.png'
        sheets.append abs_path
      end
    end

    if sheets.size > 1
      puts "Creating: #{dirname}/sheet.png"
      system("gm", "convert", *sheets, "-append", "#{dirname}/sheet.png")
    end

    sheets
  end
end
