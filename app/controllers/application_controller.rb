class ApplicationController < ActionController::API

    def test
        string = params[:string_to_cut]
        
        array = string.gsub(/\s/, "").split("")
        array = array.reject.with_index { |char, idx| (idx + 1) % 3 != 0 }
        
        string = array.join("")

        render json: { return_string: string }
    end

end
