<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExampleInvitation extends Model
{
    use HasFactory;

    protected $fillable = [
        'title', 'link', 'thumbnail', 'category_id', 'created_at'
    ];

    public function tema()
    {
        return $this->belongsTo(InvitationTema::class, 'tema_id');
    }
}