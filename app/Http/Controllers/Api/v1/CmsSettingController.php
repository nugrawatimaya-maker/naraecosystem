<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;

class CmsSettingController extends ApiController
{
    protected $storageFile;

    public function __construct()
    {
        $this->storageFile = storage_path('app/cms_config.json');
    }

    /**
     * Get CMS configuration from server database / persistent storage
     */
    public function getSettings()
    {
        if (File::exists($this->storageFile)) {
            $content = json_decode(File::get($this->storageFile), true);
            return $this->success($content, 'CMS configuration retrieved from server database.');
        }

        // Default initial config if not yet saved on server
        $default = [
            'heroConfig' => [
                'headingPre' => 'Terhubung dengan mitra yang tepat,',
                'headingHighlight' => 'capai kesepakatan yang menguntungkan.',
                'description' => 'NARA Ecosystem mempertemukan investor, pemilik lahan, kontraktor, toko bangunan, notaris, dan masyarakat umum dalam satu platform bergaransi Rekening Escrow.',
                'gradientBg' => 'from-[#064e3b] via-[#047857] to-[#022c22]'
            ],
            'lastSaved' => now()->toISOString()
        ];

        return $this->success($default, 'Default CMS configuration.');
    }

    /**
     * Save CMS configuration to server database / persistent storage
     */
    public function saveSettings(Request $request)
    {
        $payload = $request->all();
        $payload['lastSaved'] = now()->toISOString();
        $payload['updatedBy'] = 'Admin Master';

        // Ensure storage directory exists
        if (!File::exists(dirname($this->storageFile))) {
            File::makeDirectory(dirname($this->storageFile), 0755, true);
        }

        File::put($this->storageFile, json_encode($payload, JSON_PRETTY_PRINT));

        return $this->success($payload, 'Seluruh perubahan CMS Berhasil Disimpan ke Database Server VPS & Web!');
    }
}
